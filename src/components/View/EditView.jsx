// import { useNotification } from "src/hooks";
import { useMutation } from "@tanstack/react-query";
import { Button } from "../Button";
import { TextInput, PicInput, TextArea } from "../Form";
import styles from "./View.module.css";
import { useState } from "react";
import { updateAd } from "src/store/Firebase";
import { useNotification } from "src/hooks";

export const EditView = ({ ad, setModalOpen, refetch }) => {
  const { notify } = useNotification();

  const [formData, setFormData] = useState({
    cta: ad.cta,
    description: ad.description,
    headline: ad.headline,
    productId: ad.productId,
  });

  const [pics, setPics] = useState(ad.pics);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: updateAd,
    onSuccess: () => {
      setModalOpen(false);
      notify({
        type: "success",
        title: "The ad has been updated",
      });
      refetch();
    },
    onError: (err) => {
      console.log(err);
      notify({
        type: "error",
        title: "There was a problem updating the ad",
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
        id: ad.id,
        productId: ad.productId,
        pics: pics.filter((item) => item !== ""),
        ...formData,
      });
    }
  };

  if (isLoading) return <span>Loading...</span>;

  return (
    <div className={styles.createContainer}>
      <h2>Update ad for {ad.headline}.</h2>
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
