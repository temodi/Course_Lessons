import SpecInput from "./SpecInput";

function QuestionForm() {
  return (
    <form>
      <SpecInput
       labelText="Kérdes"
       name="question"
      />
      <SpecInput
        labelText="Válasz 1"
        name="answer_1"
      />
      <SpecInput 
        labelText="Válasz 2"
        name="answer_2"
      />
      <SpecInput 
        labelText="Válasz 3"
        name="answer_3"
      />
      <label htmlFor="correct">
        Jó válasz szám:
        <input type="text" name="correct" id="correct" />
      </label>
      <div>
        <button name="save">Mentés</button>
      </div>
    </form>
  )
}

export default QuestionForm;