import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./SearchForm.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  steamid: yup
    .string()
    .matches(/^STEAM_[0-5]:[01]:[0-9]{1,11}$/, "Invalid Steam ID"),
});

const SearchForm = () => {
  const { setSearchId, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();
  const [hint, setHint] = useState("");
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => searchText.current.focus(), []);

  const onFocusHandler = () => {
    setHint("");
  };
  
  const onSubmitHandler = (e) => {
    let tempSearchId = searchText.current.value.trim();
    const isValid = schema.isValidSync({ steamid: tempSearchId });
    console.log(isValid); 

    if (isValid) {
      setSearchId(searchText.current.value);
      reset();
      navigate(`/sprawdz/${tempSearchId}`);
    } else {
      setHint("Niewłaściwy format Steam ID.");
    }
  };

  return (
    <div className="search-form">
      <div className="search-container">
        <div className="search-form-content">
          <form
            className="search-form"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div className="search-form-elem">
              <input
                {...register("steamid")}
                type="text"
                className="form-control"
                placeholder="STEAM_0:1:3269899"
                required
                ref={searchText}
                onFocus={onFocusHandler}
              />
              <span
                className="tooltipText"
                data-tip={hint !== "" ? hint : ""}
              ></span>
              {/* <p>{errors.steamid?.message}</p> */}
              <button type="submit" className="btn" id="check-button">
                Sprawdź
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
