import React, { useEffect, useState } from "react";

export default function App() {
  const [paragraph1, setParagraph1] = useState("");
  const [paragraph2, setParagraph2] = useState("");
  const [sum, setSum] = useState(0);

  // constructor() {
  //   super();

  //   this.state = {
  //     paragraph1: "",
  //     paragraph2: "",
  //     sum: 0,
  //   };
  // }
  const handleParagraph1 = (evt) => {
    const newText = evt.target.value;
    setParagraph1(newText);
  };

  const handleParagraph2 = (evt) => {
    const newText = evt.target.value;
    setParagraph2(newText);
  };

  // handleParagraph1 = (evt) => {
  //   this.setState({
  //     paragraph1: evt.target.value,
  //   });
  // };
  // handleParagraph2 = (evt) => {
  //   this.setState({
  //     paragraph2: evt.target.value,
  //   });
  // };

  useEffect(() => {
    document.title = paragraph1.length;
    setSum(paragraph2.length);
  }, [paragraph1, paragraph2]);

  /**
    presviousState = estado anterior
    _ = props anterior
    this.state = estado atual

   * componentDidUpdate(_, previousState) {
    const {
      paragraph1: oldParagraph1,
      paragraph2: oldParagraph2,
    } = previousState;
    const { paragraph1, paragraph2 } = this.state;

    if (oldParagraph1 !== paragraph1) {
      console.log("componetDidUpdate");
      document.title = this.state.paragraph1.length;
    }
    if (oldParagraph2 !== paragraph2) {
      this.setState({ sum: paragraph2.length });
    }
  }
   */

  // componentDidUpdate( ) {
  //     console.log("componetDidUpdate");
  //     document.title = this.state.paragraph1.length
  // }

  return (
    <div className="container">
      <h1>React Hooks</h1>
      <input
        autoFocus
        type="text"
        placeholder="Digite aqui"
        value={paragraph1}
        onChange={handleParagraph1}
      />
      <input
        type="text"
        placeholder="Digite aqui"
        value={paragraph2}
        onChange={handleParagraph2}
      />
      <p>
        <b>parágrafo (1)</b>: {paragraph1}
      </p>
      <p>
        <b>parágrafo (2)</b>: {paragraph2}
      </p>
      <p>
        Quantidades de caracteres do<b> parágrafo (2)</b> = <b>{sum}</b>
      </p>
    </div>
  );
}
