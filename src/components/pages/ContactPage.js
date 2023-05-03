import React from "react";

function ContactPage() {
  return (
    <div className="container">
      <h2>Contact Page</h2>
      <form>
        <div class="mb-3">
          <label for="fullname" class="form-label">
            Fullname
          </label>
          <input
            type="text"
            class="form-control"
            id="fullname"
            aria-describedby="fullname"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div class="mb-3">
          <textarea
            class="form-control"
            id="message"
            aria-describedby="emailHelp"
          ></textarea>
          <label class="form-check-label" for="message">
            Message
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
