import React, { useState } from 'react';
import "./App.css"
function InputForm() {
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendInputToFlask(inputValue);
  }

  function sendInputToFlask(inputValue) {
    fetch('http://127.0.0.1:8000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "data":{"search": inputValue }})
    })
      .then(response => response.json())
      .then(data => {
        // handle server response
        setSentence(data);
      })
      .catch(error => console.error(error));
  }
  const a=<div><p>Operators must meet both MOSS and HSWA requirements. MOSS addresses many</p>
          <p>duties required under HSWA and it isn’t necessary to duplicate these.</p>
          <p>If you follow your approved operator plan you will generally have in place processes to:</p>
          <p> manage risks</p>
          <p> ensure the safety of others in the workplace</p>
          <p> develop emergency management plans</p>
          <p> notify events</p>
          <p> periodically review workplace controls</p>
          <p> provide health and safety information to workers.</p>
          <p>However, as noted earlier in this document, the standards required in HSWA may be more</p>
          <p>extensive and require additional steps to be taken. In addition, the following HSWA duties</p>
          <p>are not specifically addressed by MOSS:</p>
          <p> overlapping duties</p>
          <p> upstream duties</p>
          <p> officers’ due diligence</p>
          <p> duty to manage asbestos</p>
          <p> worker engagement, participation and representation</p>
          <p> the requirement to provide facilities.</p>
          <p>There is more detailed guidance on these duties on our website.</p></div>
  const b=<div>
      <p>HSWA doesn’t require formally documented health and safety systems approved by
        Maritime NZ.However, written records are a good way to keep track of the processes you have in
        place and to verify you are following your own system. For example how you respond
        to the suggestions that workers have made about health and safety.
        If you are a maritime transport operator, you don’t need different systems for MOSS
        and HSWA – develop one system that covers both sets of requirements. If you are
        part of an ACC ‘incentive’ scheme, you can include those requirements as well.</p>
    </div>

  const c=<div>
    <p>HSWA requires that passengers:</p>
    <p> take reasonable care of their own health and safety</p>
    <p> take reasonable care that the things they do not harm the health and safety of other people</p>
    <p> follow reasonable instructions given by the operator so that the operator can</p>
    <p> follow reasonable instructions given by the operator so that the operator can</p>
    <p> follow reasonable instructions given by the operator so that the operator can
    comply with their duties under HSWA.</p>
    <p>Operators must have safe operating procedures for passengers as part of their
    certification under MOSS. These procedures will address things such as induction
    and safety management. So long as the operator is meeting its duties under HSWA,
    it is unlikely that an operator will be responsible for injuries to passengers who ignore
    their safety instructions.</p>
  </div>
  const d=<div>
    <p>Under HSWA you are a ‘PCBU’ – a ‘person conducting a business or undertaking’.
    You are also classed as a ‘worker’ because you are doing work.</p>
    <p>As a PCBU you have a duty to look after:</p>
    <p> your own health and safety</p>
    <p> the health and safety of other workers that work on your boat and</p>
    <p> the health and safety of other people who might be affected by the work you do
    (including passengers).</p>
    <p>If your operation follows an approved operator plan, you already meet many of the
        duties required under HSWA.
        You will need to address ‘overlapping duties’. This means when you work with other
        businesses, for example when another PCBU (eg a contractor) is carrying out work on
        your boat, you need to consult with them and coordinate your health and safety approach.
        Maritime NZ has published guidance on our website explaining this requirement. </p>
  </div>
  const e=<div>
    <p>Under HSWA you are a ‘PCBU’ – a person conducting a business or undertaking’.
      Your duty is to ensure the health and safety of yourself and anyone else affected by
      your work (for example people in other vessels that are operating in the same area as
      you). But if you have no workers (crew), it is likely that the biggest change will be the
      ‘overlapping duties’ requirement, outlined above.</p>
  </div>

  const f=<div>
    <p>
    Under HSWA, ‘officers’ of PCBUs must exercise due diligence to ensure that their
    operation fulfils its health and safety duties. Chief executives and directors are officers.</p>
    <p>Ways you can exercise due-diligence include:</p>
    <p> keep up-to-date with workplace health and safety matters, especially as they
    relate to your business</p>
    <p> understand the work of the business and the hazards and risks involved</p>
    <p> have in place processes and resources to minimise risks</p>
    <p> have in place a process for receiving and considering information about incidents,
    hazards and risks</p>
    <p> undertake audits</p>
    <p> have in place HSWA key performance indicators for managers and the chief executive.</p>
    <p>You may need structured processes to ensure that you meet your due diligence duty.
    If you are land-based, you will likely need to rely on information from your staff and you
    need to be able to collect and consider that information.
    While you don’t have to be a health and safety expert, you need to make a reasonable
    effort to provide health and safety leadership and understand what questions to ask.
    For example, if your operation has three ships and you notice in the monthly health and
    safety reports that one vessel never reports any injuries while the other two do, this could
    be a cue to ask questions and dig into the situation to understand more about what
    is happening.
    </p>
  </div>

  const g=<div>
    <p>
    Under maritime law, ships’ masters have a great deal of responsibility and control over
    the ship while at sea. At the same time, masters working for a maritime operator as an
    employee or contractor are considered a ‘worker’ under HSWA.
    The maritime operator (as the PCBU) has the primary duty to ensure the health and safety
    of workers and other people in the operation. In practice, operators and masters must
    work together to ensure their duties are met.
    Maritime operators (PCBUs) also have overall responsibility for the operation. They
    must have in place systems and processes to ensure the safety of workers and provide
    appropriate resources – eg safe machinery, equipment and facilities. While the operator
    may not be physically present, they have a duty to ensure that the ship operates safely,
    and can’t contract out or transfer this duty.
    The master controls the ship when it is at sea, and makes the day-to-day decisions
    required to run the ship. They are responsible for looking after the ship and crew and must
    take appropriate steps when machinery, equipment etc. needs maintenance or poses a
    risk to health and safety. As the person ‘on the spot’ it’s the master’s job to make sure that
    everyone understands and uses the health and safety systems and processes put in place
    by the PCBU.
    </p>
  </div>
  const par=(sentence)=>{
    if (inputValue === "I have an approved Maritime Transport Operator Certificate(MTOC) under MOSS. What more do I need to do?"){
      return a
    }
    if(inputValue==="Do I need to complete a document, like my operator plan, for the new Act?"){
      return b;
    }
    if(inputValue==="I have a water taxi business. If one of my passengers ignores safety instructions and, as a result, gets hurt on my boat, am I responsible?"){
      return c;
    }
    if(inputValue==="I am self-employed and I run my own boat with crew. What do I need to know about the new Act?"){
      return d;
    }
    if(inputValue==="I own one boat, which I operate by myself, with no crew– I am the skipper whenever the boat is used. How much difference does the HSWA make to what I have to do?"){
      return e;
    }
    if(inputValue==="I’m the chief executive of a large maritime operation. How can I discharge my responsibilities for health and safety obligations when I work in an office and my ships are at sea?"){
      return f;
    }
    if(inputValue==="As a master under the MTA I call the shots, but under HSWA I’m considered a ‘worker’. How can I tell what act applies at what time? How do I manage these different requirements?"){
      return g;
    }
    if (inputValue===""){
      return <h1>Input</h1>
    }
    const paragraph = sentence;
    if (sentence===""){
      return <h1>Not found</h1>
    }
    const sentences = paragraph.split('. ');
    let count=1;
    let k=sentences.map(sentence => <p>{count++} {sentence.trim()}</p>);
    return k
  }
  const [sentence,setSentence]=useState("Please input next string")
  return (
    <div className='for'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Enter something:</label>
        <input type="text" id="input" width="50px" height="60px" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <hr></hr>
      <div className='par'>
        <div className='d'>
        {par(sentence)}
        </div>
      </div>
    </div>
  );
}

export default InputForm;
