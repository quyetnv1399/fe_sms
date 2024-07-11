import { Button, Divider, Modal, Table } from "antd";
import { Card } from "antd";
import ModalComponent from "./crud/modal";

const HomeView = (props) => {
  return (
    <div className="container shadow-xl">
      <Card>
        <div>
          <Button type="primary" onClick={() => props.HandleAdd()}>
            New
          </Button>
        </div>
        <Divider />
        <Table
          dataSource={props.data}
          columns={props.columns}
          pagination={props.tableParams.pagination}
          onChange={props.handleTableChange}
        />
      </Card>
      {props.visible ? (
        <ModalComponent
          visible={props.visible}
          onClose={() => props.setvisible(!props.visible)}
          title={"Add new"}
          data={props.selectedRecord}
          getall={() => props.getProviders()}
        />
      ) : (
        <></>
      )}
      {props.isDelete ? (
        <Modal
          visible={props.isDelete}
          title={"Bạn có muốn xóa row này không ?"}
          onCancel={() => props.setisdelete(!props.isDelete)}
          onOk={() => {
            props.onDelete(props.selectedRecord);
          }}
        ></Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HomeView;
