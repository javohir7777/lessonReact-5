import React from "react";

const Cards = ({ id, name, debt, phone, editDebt }) => {
  return (
    <div className="card p-3">
      <div className="card-body d-flex aligen-items-center justify-content-between bg-light">
        <h3>{name}</h3>
        <p className="my-1">{debt}</p>
        <p className="my-1">{phone}</p>
        <div>
          <button
            onClick={() => editDebt(id)}
            type="button"
            class="btn btn-success me-3"
          >
            Edit
          </button>
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
