import { Button, message, Upload } from "antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";

const EditPdf = () => {
  const [fileList, setFileList] = React.useState([]);
  const [imageURL, setImageURL] = React.useState("");

  const props = {
    beforeUpload(file) {
      // console.log('FILE', file);
      let fileExtension = file?.name.split(".").pop();
      if (fileExtension === "pdf") {
        // uploadImage(file);
        setImageURL(URL.createObjectURL(file));
        setFileList([file]);
      } else {
        message.error({
          content: "Only svg will be accepted",
          key: "TELECOM_NMS_UI",
        });
        setFileList([]);
      }
      return false;
    },
    onRemove: () => {
      setFileList([]);
    },
    fileList: fileList,
    maxCount: 1,
    accept: ".pdf",
  };
  return (
    <div>
      <Upload {...props}>
        <Button size="small" icon={<UploadOutlined />}>
          Upload
        </Button>
      </Upload>

      {!!imageURL && (
        <embed
          src={imageURL + "#toolbar=0"}
          type="application/pdf"
          height={800}
          width={"100%"}
        />
      )}
    </div>
  );
};

export default EditPdf;
