"use client";

import { useState } from "react";

export default function Form({ formTitle, addTemplate }) {
  const [templateTitle, setTemplateTitle] = useState("");
  const [templateBody, setTemplateBody] = useState("");
  const [templateMessage, setTemplateMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const URL = "http://localhost:3000/api/collection";
    const data = { title: templateTitle, body: templateBody, message: templateMessage };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(URL, options);
    const result = await response.json();
    console.log({ resultFromClient: result });
    return result;
  }

  return (
    <div className="form-container">
      <h3 className="form-header">{formTitle}</h3>
      <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="title">Titre du template</label>
        <input
          type="text"
          id="title"
          value={templateTitle}
          onInput={(e) => setTemplateTitle(e.target.value)}
        />
        <label htmlFor="body">Corps du template</label>
        <textarea
          name="message"
          id="body"
          cols="60"
          rows="15"
          value={templateBody}
          onInput={(e) => setTemplateBody(e.target.value)}
        ></textarea>

        <label htmlFor="message">Message du template</label>
        <textarea
          name="message"
          id="message"
          cols="60"
          rows="3"
          value={templateMessage}
          onInput={(e) => setTemplateMessage(e.target.value)}
        ></textarea>
        <input type="submit" value="Create" className="btn" />
      </form>
    </div>
  );
}