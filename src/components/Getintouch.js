import Touchlinks from "./innercomponents/Touchlinks";

function Getintouch() {
  return (
    <div className="getintouch-container">
      <Touchlinks />
      <div className="form-container">
        <form action="#">
          <ul>
            <li>
              <p className="left">
                <label for="first_name">Name </label>
                <input type="text" name="first_name" placeholder="your Name" />
              </p>
            </li>

            <li>
              <p>
                <label for="email">
                  email <span className="req">*</span>
                </label>
                <input type="email" name="email" placeholder="xxx@gmail.com" />
              </p>
            </li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              <label for="comments">message </label>
              <textarea cols="46" rows="3" name="comments"></textarea>
            </li>

            <li>
              <input className="btn btn-submit" type="submit" value="Submit" />
              <small>
                or press <strong>enter </strong>
              </small>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Getintouch;
