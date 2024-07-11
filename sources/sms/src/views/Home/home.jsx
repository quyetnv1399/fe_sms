import { Button, Divider, Modal, Table, Tooltip, Switch, Dropdown } from "antd";
import React, { useEffect, useState } from "react";
import { Card } from "antd";
import ModalComponent from "./crud/modal";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import Provider from "../../api/Provider";
import HomeView from "./HomeView";

const Home = () => {
  const [visible, setvisible] = useState(false);
  const [data, setdata] = useState([]);
  const [isDelete, setisdelete] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });

  //getall data api
  const getProviders = () => {
    Provider.getAll().then((res) => {
      setdata(res.data.providers);
    });
  };

  const HandleEdit = (record) => {
    setSelectedRecord(record);
    setvisible(!visible);
  };

  const handleTableChange = (pagination) => {
    setTableParams({
      pagination,
    });
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      // setData([]);
    }
  };

  const HandleDelete = (record) => {
    setSelectedRecord(record);
    setisdelete(!isDelete);
  };

  const onDelete = (record) => {
    Provider.deleteProvider(record._id).then(() => {
      getProviders();
      setisdelete(!isDelete);
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
      render: (level) => (
        <Button
          className={level ? "bg-green-500" : "bg-red-600"}
          type="primary"
        >
          {level}
        </Button>
      ),
    },
    {
      title: "In Use",
      dataIndex: "isInUse",
      key: "isInUse",
      render: (isInUse) => <Switch checked={isInUse} />,
    },
    {
      title: "Message ID",
      dataIndex: "noOfSuccessfulMessages",
      key: "noOfSuccessfulMessages",
      render: (noOfSuccessfulMessages) => (
        <Button
          type="primary"
          className={noOfSuccessfulMessages ? "bg-green-500" : "bg-red-600"}
        >
          {noOfSuccessfulMessages ? "True" : "False"}
        </Button>
      ),
    },
    {
      title: "Period",
      dataIndex: "period",
      key: "period",
      render: (period) => (
        <Button
          className={period ? "bg-green-500" : "bg-red-600"}
          type="primary"
        >
          {period ? "True" : "False"}
        </Button>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (action, record) => (
        <Dropdown
          className=""
          menu={{
            items: [
              {
                key: "view",
                label: (
                  <span onClick={() => HandleEdit(record)}>
                    <Tooltip title="view">
                      <Button className="flex justify-start items-center w-full">
                        <FaEye className="text-xl" /> View
                      </Button>
                    </Tooltip>
                  </span>
                ),
              },
              {
                key: "edit",
                label: (
                  <span onClick={() => HandleEdit(record)}>
                    <Tooltip title="edit">
                      <Button className="flex justify-start items-center w-full">
                        <FaEdit className="text-xl" /> Edit
                      </Button>
                    </Tooltip>
                  </span>
                ),
              },
              {
                key: "delete",
                label: (
                  <span onClick={() => HandleDelete(record)}>
                    <Tooltip title="delete">
                      <Button className="flex justify-start items-center w-full">
                        <FaTrash className="text-xl" /> Delete
                      </Button>
                    </Tooltip>
                  </span>
                ),
              },
            ],
          }}
          placement="bottomRight"
          arrow
        >
          <AiFillSetting className="text-2xl bg-bl" />
        </Dropdown>
      ),
    },
  ];

  useEffect(() => {
    getProviders();
  }, []);

  return HomeView({
    visible,
    setvisible,
    data,
    isDelete,
    setisdelete,
    selectedRecord,
    tableParams,
    handleTableChange,
    onDelete,
    columns,
    getProviders,
  });
};

export default Home;
