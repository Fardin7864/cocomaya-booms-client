import SerctionTitle from "../../../common/SectionTitle/SerctionTitle";
import ItemTable from "./ItemTable/ItemTable";

const ManageItem = () => {
  return (
    <>
      <SerctionTitle
        subTitle={"Update Form"}
        title={"Update Menu"}
      ></SerctionTitle>
      <ItemTable></ItemTable>
    </>
  );
};

export default ManageItem;
