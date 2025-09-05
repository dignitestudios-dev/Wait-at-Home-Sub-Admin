import React, { useState } from "react";
import UserProfile from "../../../components/subadmin/app/users/UserProfile";
import UserAbout from "../../../components/subadmin/app/users/UserAbout";
import PetProfile from "../../../components/subadmin/app/users/PetProfile";
import WaitAtHome from "../../../components/subadmin/app/users/WaitAtHome ";
import PetDetailModal from "../../../components/subadmin/app/users/PetDetailModal";
import { useNavigate, useParams } from "react-router";
import { useFetchById } from "../../../hooks/api/Get";
import { UserDetailsSkeleton } from "../../../components/global/Skeleton";
import Cookies from "js-cookie";
import axios from "../../../axios";
import { ErrorToast, SuccessToast } from "../../../components/global/Toaster";
const UserDetails = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("PetProfile");
  const [petDetailModal, setPetDetailModal] = useState(false);
  const [petData, setPetData] = useState("");
  const [loader, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [restrictLoader, setRestrictLoader] = useState(false);
  const { id } = useParams();
  const { loading, data } = useFetchById(
    `/admin/get-user-profile?userId=${id}`,
    update
  );
  const handleCreateChat = async (id) => {
    const payload = {
      subject: null,
      description: null,
      userId: id,
    };
    setLoading(true);
    try {
      const response = await axios.post("/user/create-chat-room", payload);
      if (response?.status === 200) {
        SuccessToast(response?.data?.message);
        Cookies.set("chatRoomId", response?.data?.data?.chatRoomId);
        navigate("/app/chat");
      }
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRestrict = async (id) => {
    const payload = {
      userId: id,
    };
    setRestrictLoader(true);
    try {
      const response = await axios.post("/admin/restrict-user", payload);
      if (response?.status === 200) {
        SuccessToast(response?.data?.message);
        Cookies.set("chatRoomId", response?.data?.data?.chatRoomId);
        setUpdate((prev) => !prev);
      }
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
    } finally {
      setRestrictLoader(false);
    }
  };

  return (
    <div>
      {loading ? (
        <UserDetailsSkeleton />
      ) : (
        <div>
          <UserProfile
            restrictLoader={restrictLoader}
            loading={loader}
            data={data}
            handleCreateChat={handleCreateChat}
            handleRestrict={handleRestrict}
          />
          <div className="flex mt-5 gap-10">
            <UserAbout data={data} />
            <div className="flex-1">
              <div className="flex items-center gap-8 border-b border-[#E0E0E0] pb-2 mb-4">
                <p
                  onClick={() => setActive("PetProfile")}
                  className={`text-[16px] cursor-pointer font-[600] ${
                    active === "PetProfile"
                      ? "text-[#5E2E86] border-b-2 border-[#00AAAD] pb-1"
                      : "text-[#787878] font-[500]"
                  }`}
                >
                  Pet Profiles
                </p>
                <p
                  onClick={() => setActive("WaitQueue")}
                  className={`text-[16px] cursor-pointer font-[600] ${
                    active === "WaitQueue"
                      ? "text-[#5E2E86] border-b-2 border-[#00AAAD] pb-1"
                      : "text-[#787878] font-[500]"
                  }`}
                >
                  Wait at home Queue
                </p>
              </div>
              <div className="bg-gradient-to-tl from-[#684D7B]/20 to-[#10C0B6]/20 rounded-[20px]  p-3 ">
                {active === "PetProfile" && <PetProfile data={data} />}
                {active === "WaitQueue" && (
                  <WaitAtHome
                    data={data}
                    handleViewInfo={() => {
                      setPetDetailModal(true);
                      setPetData(data?.appointments[0]?.petId);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <PetDetailModal
            petData={petData}
            isOpen={petDetailModal}
            onClose={() => setPetDetailModal(false)}
          />
        </div>
      )}
    </div>
  );
};

export default UserDetails;
