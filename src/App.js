import "./App.css";
import { useState } from "react";
let data = require("./data/util.json");

// 1. Parse the JSON object to extract its structure.
// 2. Iterate over the object's fields to generate the form's HTML code.
// 3. Use the HTML code to render the form on a web page.

function App() {
  const [values, setValue] = useState(data.fields);

  return (
    <div className="App">
      <h1>Lesson with Mr Jeff</h1>
      <form action="" className="form-section">
        {values.map((item, index) => {
          console.log("item :>> ", item);
          const { label, maxLength, minLength, name, required, type, options } =
            item;

          return (
            <>
              <div key={index}>
                <label for="scales">{label} </label>

                <input  
                  type={type}
                  name={name}
                  minLength={minLength}
                  maxLength={maxLength}
                  size = '15'
                  required={required}
                />
                <br />
              </div>
              <div>
                {item.options ? (
                  <select>
                    <option value="">--Please choose an option--</option>
                    {options.map((item, index) => {
                      const { label, value } = item;
                      return (
                        <>
                          <option value={value} key={index}>
                            {label}
                          </option>
                        </>
                      );
                    })}
                  </select>
                ) : (
                  ""
                )}
              </div>
            </>
          );
        })}
      </form>
    </div>
  );
}

export default App;

