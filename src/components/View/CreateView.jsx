// import { useNotification } from "src/hooks";
import { useMutation } from "@tanstack/react-query";
import { Button } from "../Button";
import { TextInput, PicInput, TextArea } from "../Form";
import styles from "./View.module.css";
import { useState } from "react";
import { createNewAd } from "src/store/Firebase";
import { useNotification } from "src/hooks";

export const CreateView = ({ product, setModalOpen, refetch }) => {
  const { notify } = useNotification();

  const [formData, setFormData] = useState({
    cta: "",
    description: product.productDescription,
    headline: product.productName,
    productId: product.productId,
  });

  const [pics, setPics] = useState([product.productImage]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: createNewAd,
    onSuccess: () => {
      setModalOpen(false);
      notify({
        type: "success",
        title: "A new ad has been created",
      });
      refetch();
    },
    onError: () => {
      notify({
        type: "error",
        title: "There was a problem creating a new ad",
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormDataValid = Object.values(formData).every((value) => {
      return String(value).trim() !== "";
    });
    if (!isFormDataValid) {
      setError("Please fill in every field");
    } else {
      setError("");
      mutate({
        productId: product.productId,
        pics: pics.filter((item) => item !== ""),
        ...formData,
      });
    }
  };

  if (isLoading) return <span>Loading...</span>;

  return (
    <div className={styles.createContainer}>
      <h2>Create a new ad for {product.productName}.</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          title="Call To Action"
          label="cta"
          placeholder="Add a call to action"
          value={formData.cta}
          onChange={handleChange}
        />

        <TextArea
          title="Description"
          label="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
        />

        <TextInput
          title="Headline"
          label="headline"
          placeholder="Enter headline"
          value={formData.headline}
          onChange={handleChange}
        />

        <PicInput pics={pics} setPics={setPics} />
        <Button type="submit" text="Submit" />
        <p className="errorText">{error}</p>
      </form>
    </div>
  );
};
