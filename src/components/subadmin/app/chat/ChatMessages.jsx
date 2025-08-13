import React from "react";
import { ChatAccept, ChatClose, UserPro } from "../../../../assets/export";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { MdCheck } from "react-icons/md";
import { IoSend } from "react-icons/io5";

const ChatMessages = ({
  chatSiderBarTab,
  handleStartChat,
  setViewResponseModal,
}) => {
  return (
    <div>
      <div className="bg-[#FFFFFF66]  rounded-bl-[16px] rounded-br-[16px]">
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          <div className="flex flex-col">
            <div className="flex items-center mb-1">
              <img src={UserPro} alt="" className="w-8 h-8 rounded-full mr-2" />
              <span className="text-[14px] text-[#000000] font-[600] ">
                John Doe
              </span>
            </div>
            <div className="w-full">
              <div className="bg-[#FFFFFF80] mx-8 px-4 py-2 text-[#000000] rounded-xl text-[14px] font-[400] shadow-sm max-w-xs">
                labore et dolore magna aliqua.
              </div>
              <div className="text-[10px] text-[#A4A4A4]  ">09:25 AM</div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-[#00AAAD] text-white px-4 py-2 rounded-xl max-w-xs">
              Hello! John Doe
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-[#00AAAD] border rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px] p-4  shadow-sm">
              <div className="flex items-center gap-10 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-[45px] h-[45px] rounded-full border-2 border-[#FFFFFF] flex items-center justify-center text-white">
                    <MdCheck size={29} />
                  </div>
                  <span className="font-[600] text-[16px] text-white ">
                    Response Submitted
                  </span>
                </div>
                <span
                  onClick={() => setViewResponseModal(true)}
                  className="text-[#FFFFFF] text-[14px] font-[500] underline"
                >
                  View Response
                </span>
              </div>
            </div>
          </div>
          {chatSiderBarTab === "Chat" ? (
            <>
              <div className="flex justify-center gap-2 mx-auto h-[48px] items-center w-[187px] px-4 py-2 bg-[#FFFFFF59] text-[#000000] font-[500] text-[14px] rounded-full">
                <LiaCheckDoubleSolid size={22} /> Chat Started
              </div>

              <div className="flex flex-col">
                <div className="flex items-center mb-1">
                  <img
                    src={UserPro}
                    alt=""
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-[14px] text-[#000000] font-[600] ">
                    John Doe
                  </span>
                </div>
                <div className="w-full">
                  <div className="bg-[#FFFFFF80] mx-8 px-4 py-2 text-[#000000] rounded-xl text-[14px] font-[400] shadow-sm max-w-xs">
                    labore et dolore magna aliqua.
                  </div>
                  <div className="bg-[#FFFFFF80] mt-3 mx-8 px-4 py-2 text-[#000000] rounded-xl text-[14px] font-[400] shadow-sm max-w-xs">
                    Sed ut perspiciatis
                  </div>
                  <div className="text-[10px] text-[#A4A4A4]  ">09:25 AM</div>
                </div>
              </div>
              <div className="p-4 bg-white border-t rounded-bl-[16px] rounded-br-[16px]   flex gap-4 items-center">
                <input
                  type="text"
                  placeholder="Type Message"
                  className="flex-1 border border-[#00AAAD] rounded-[8px] px-4 py-2 focus:outline-none"
                />
                <button className=" bg-[#00AAAD] text-white p-3 rounded-full">
                  <IoSend size={20} />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex  justify-center ">
                <button
                  onClick={handleStartChat}
                  className="px-4 flex items-center gap-2 py-2 font-[500]  h-[47px]  rounded-tl-[20px] rounded-bl-[20px] bg-[#5E2E86] text-white text-[14px]"
                >
                  <img src={ChatAccept} className="w-[24px] h-[24px] " alt="" />{" "}
                  Start Chat
                </button>
                <button className="px-4 flex items-center gap-2 py-2 font-[500]  h-[47px]  rounded-tr-[20px] rounded-br-[20px] bg-[#7ACCC8] text-white text-[14px]">
                  <img src={ChatClose} className="w-[24px] h-[24px] " alt="" />{" "}
                  Ignore chat
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessages;
