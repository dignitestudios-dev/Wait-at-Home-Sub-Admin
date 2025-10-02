import { useState, useEffect } from "react";
import axios from "../../axios";
import { processError } from "../../lib/utils";

const useGlobal = (url, currentPage = 1, search = "", update = false) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getGlobal = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${url}?page=${currentPage}&search=${search}`
      );
      setData(data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGlobal();
  }, [currentPage, search, update]);

  return { loading, data, pagination };
};
const useFilterGlobal = (
  url,
  currentPage = 1,
  search = "",
  year = "",
  update = false
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getGlobal = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${url}?page=${currentPage}&search=${search}${
          year ? `&year=${year}` : ""
        }`
      );
      setData(data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGlobal();
  }, [currentPage, search, year, update]);

  return { loading, data, pagination };
};

const useFetchById = (url, update = false) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getDataById = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(`${url}`);
      setData(data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!url) return;
    getDataById();
  }, [url, update]);

  return { loading, data, pagination };
};

export { useGlobal, useFetchById, useFilterGlobal };
