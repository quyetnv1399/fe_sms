import {
  Button,
  Dropdown,
  Modal,
  Select,
  Switch,
  Table,
  Tag,
  Tooltip,
} from "antd";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import Column from "antd/es/table/Column";
import Search from "antd/es/transfer/search";
import CreateUpdateComponent from "./create-update/CreateUpdateComponent";

const ProviderView = (props) => {
  return (
    <div>
      {props.contextHolder}

      <div className="flex flex-row flex-wrap justify-between mb-5 gap-2">
        <div className="w-60">
          <Search placeholder="Input search text" />
        </div>
        <Select
          allowClear
          showSearch
          placeholder="Select a person"
          optionFilterProp="label"
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "tom", label: "Tom" },
          ]}
        />
        <Button
          className="ml-auto"
          type="primary"
          onClick={() => props.viewActionProvider(null)}
        >
          New Provider
        </Button>
      </div>

      <Table
        dataSource={props.data}
        pagination={props.pagination}
        onChange={props.handleTableChange}
      >
        <Column
          title="#"
          dataIndex="index"
          render={(_, record, index) => <>{index + 1}</>}
        />

        <Column title="Name" dataIndex="name" />

        <Column
          title="Level"
          dataIndex="level"
          render={(level) => (
            <Tag color={level === "Primary" ? "#108ee9" : "#00c431"}>
              {level}
            </Tag>
          )}
        />

        <Column
          title="In Use"
          dataIndex="isInUse"
          render={(isInUse) => <Switch checked={isInUse} />}
        />

        <Column
          title="Successful Msgs"
          dataIndex="noOfSuccessfulMessages"
        />

        <Column
          title="Period"
          dataIndex="period"
        />

        <Column
          title="Action"
          dataIndex="action"
          render={(_, record) => (
            <Dropdown
              className=""
              placement="bottomRight"
              arrow
              menu={{
                items: [
                  {
                    key: "view",
                    label: (
                      <span onClick={() => props.viewActionProvider(record)}>
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
                      <span onClick={() => props.viewActionProvider(record)}>
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
                      <span onClick={() => props.handleDelete(record)}>
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
            >
              <Button type="text">
                <AiFillSetting className="text-2xl bg-bl" />
              </Button>
            </Dropdown>
          )}
        />
      </Table>

      {props.visible ? (
        <CreateUpdateComponent
          visible={props.visible}
          param={props.dataDetail}
          getall={() => props.getProviders(props.pagination)}
          onClose={() => props.setvisible(false)}
          showMess={(type, mess) => {
            props.showMess(type, mess);
          }}
        />
      ) : (
        <></>
      )}

      {props.isDelete ? (
        <Modal
          open={props.isDelete}
          title={"Bạn có muốn xóa row này không ?"}
          onCancel={() => props.setisdelete(!props.isDelete)}
          onOk={() => {
            props.showMess("success", "You successfully deleted");
            props.onDelete(props.selectedRecord);
          }}
        ></Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProviderView;
