import { Button, Divider, Modal, Table, Tooltip, Switch, Dropdown } from "antd";
import React, { useState } from "react";
import { Card } from "antd";
import ModalComponent from "./crud/modal";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import data from "../../data/data";

const Home = () => {
  const [visible, setvisible] = useState(false);
  const [isDelete, setisdelete] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 7,
    },
  });
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
    data = data.filter((item) => item.id !== 1);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Level",
      dataIndex: "isPrimary",
      key: "isPrimary",
      render: (isPrimary) => (
        <Button
          className={isPrimary ? "bg-green-500" : "bg-red-600"}
          type="primary"
        >
          {isPrimary ? "Primary" : "Secondary"}
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
      dataIndex: "noOfSuccessfulMessage",
      key: "noOfSuccessfulMessage",
      render: (noOfSuccessfulMessage) => (
        <Button
          type="primary"
          className={noOfSuccessfulMessage ? "bg-green-500" : "bg-red-600"}
        >
          {noOfSuccessfulMessage ? "True" : "False"}
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
          menu={{
            items: [
              {
                key: "edit",
                label: (
                  <span onClick={() => HandleEdit(record)}>
                    <Tooltip title="edit">
                      <Button className="flex items-center">
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
                      <Button className="flex items-center">
                        <FaTrash className="text-xl" /> Delete
                      </Button>
                    </Tooltip>
                  </span>
                ),
              },
            ],
          }}
          placement="bottomLeft"
          arrow
        >
          <AiFillSetting className="text-2xl bg-bl" />
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="container shadow-xl">
      <Card>
        <div>
          <Button type="primary" onClick={() => setvisible(true)}>
            New
          </Button>
        </div>
        <Divider />
        <Table
          dataSource={data}
          columns={columns}
          pagination={tableParams.pagination}
          onChange={handleTableChange}
        />
      </Card>
      {visible ? (
        <ModalComponent
          visible={visible}
          onClose={() => setvisible(!visible)}
          title={"Add new"}
          data={selectedRecord}
        />
      ) : (
        <></>
      )}
      {isDelete ? (
        <Modal
          visible={isDelete}
          title={"Bạn có muốn xóa row này không ?"}
          onCancel={() => setisdelete(!isDelete)}
          onOk={() => {
            onDelete(selectedRecord);
          }}
        ></Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
