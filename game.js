(function () {
  "use strict";

  const CODE = "32431";
  const STORAGE_KEY = "bioResetEscapeRoomProgressV1";
  const digitsByPuzzle = {
    observations: "3",
    hypothesis: "2",
    design: "4",
    data: "3",
    conclusion: "1"
  };

  const puzzles = {
    observations: {
      kicker: "SYSTEM CHECK 01 / OBSERVE",
      title: "What did the researcher actually observe?",
      prompt: "The previous researcher left a messy field log. Select every entry that reports a direct observation or measurement, rather than an explanation of what the data mean.",
      hint: "An observation reports what was measured or seen. An inference explains why it happened or what it means.",
      html: [
        "<fieldset class='answer-set'><legend>Select all direct observations.</legend>",
        "<label class='answer-option'><input type='checkbox' name='observation' value='1'> Dissolved oxygen fell from 8.2 mg/L to 2.1 mg/L over 48 hours.</label>",
        "<label class='answer-option'><input type='checkbox' name='observation' value='2'> Decomposers caused the oxygen drop by consuming oxygen as they broke down organic matter.</label>",
        "<label class='answer-option'><input type='checkbox' name='observation' value='3'> The sample's absorbance reading at 680 nm rose from 0.12 to 0.91 over 48 hours.</label>",
        "<label class='answer-option'><input type='checkbox' name='observation' value='4'> Agricultural runoff introduced phosphorus, which triggered the population spike.</label>",
        "<label class='answer-option'><input type='checkbox' name='observation' value='5'> At 400× magnification, filaments made of rectangular cells appeared in 7 of 10 microscope fields.</label>",
        "<label class='answer-option'><input type='checkbox' name='observation' value='6'> The cyanobacteria increased toxin production because environmental stress activated toxin synthesis.</label>",
        "</fieldset>"
      ].join("")
    },
    hypothesis: {
      kicker: "SYSTEM CHECK 02 / HYPOTHESIZE",
      title: "Select the strongest hypothesis",
      prompt: "A researcher wants to test whether additional nitrate affects microcystin production. For this challenge, choose the statement that gives a testable prediction and a proposed mechanism.",
      hint: "Look for a changed condition, a measurable outcome, and a proposed explanation for how one could affect the other.",
      html: [
        "<fieldset class='answer-set'><legend>Which statement best meets those criteria?</legend>",
        "<label class='answer-option'><input type='radio' name='hypothesis' value='A'> A. If nitrate is added, toxin production will increase.</label>",
        "<label class='answer-option'><input type='radio' name='hypothesis' value='B'> B. Cultures receiving an additional 50 μM nitrate will have higher average microcystin production per cell after five days than unamended cultures, because nitrogen is needed to make the amino acid components of microcystin.</label>",
        "<label class='answer-option'><input type='radio' name='hypothesis' value='C'> C. Toxic blooms are an ecological crisis and should be prevented.</label>",
        "<label class='answer-option'><input type='radio' name='hypothesis' value='D'> D. The pond contains microcystin.</label>",
        "</fieldset>",
        "<p class='small-note'>In this activity, the target is an explanatory hypothesis. An if/then prediction can count as a hypothesis in some scientific contexts.</p>"
      ].join("")
    },
    design: {
      kicker: "SYSTEM CHECK 03 / DESIGN",
      title: "Repair the experiment",
      prompt: "Twenty flasks of the same cyanobacteria culture are randomly assigned to two groups. Ten receive no additional nitrate; ten receive an extra 50 μM ammonium nitrate. All flasks have the same temperature, light cycle, volume, starting cell density, and five-day growth period. Researchers measure microcystin and cell density, then calculate microcystin production per cell.",
      hint: "The independent variable is deliberately changed. The dependent variable is measured. The negative control does not receive the added treatment.",
      html: [
        "<div class='matching-grid'>",
        "<div class='match-row'><label class='match-label' for='role-iv'>Independent variable</label><select id='role-iv' name='role-iv'><option value=''>Choose a match</option><option value='nitrate'>Amount of added ammonium nitrate</option><option value='toxin'>Microcystin production per cell</option><option value='control'>Flasks receiving no additional nitrate</option><option value='conditions'>Temperature, light, volume, cell density, and duration</option></select></div>",
        "<div class='match-row'><label class='match-label' for='role-dv'>Dependent variable</label><select id='role-dv' name='role-dv'><option value=''>Choose a match</option><option value='nitrate'>Amount of added ammonium nitrate</option><option value='toxin'>Microcystin production per cell</option><option value='control'>Flasks receiving no additional nitrate</option><option value='conditions'>Temperature, light, volume, cell density, and duration</option></select></div>",
        "<div class='match-row'><label class='match-label' for='role-control'>Negative control group</label><select id='role-control' name='role-control'><option value=''>Choose a match</option><option value='nitrate'>Amount of added ammonium nitrate</option><option value='toxin'>Microcystin production per cell</option><option value='control'>Flasks receiving no additional nitrate</option><option value='conditions'>Temperature, light, volume, cell density, and duration</option></select></div>",
        "<div class='match-row'><label class='match-label' for='role-constants'>Controlled variables</label><select id='role-constants' name='role-constants'><option value=''>Choose a match</option><option value='nitrate'>Amount of added ammonium nitrate</option><option value='toxin'>Microcystin production per cell</option><option value='control'>Flasks receiving no additional nitrate</option><option value='conditions'>Temperature, light, volume, cell density, and duration</option></select></div>",
        "</div>"
      ].join("")
    },
    data: {
      kicker: "SYSTEM CHECK 04 / ANALYZE",
      title: "Read the growth data",
      prompt: "The monitor shows bacterial density over four equal 12-hour intervals. Calculate the rate for each interval (change in density ÷ change in time), then choose the interval with the highest rate.",
      hint: "All intervals are 12 hours long, so the interval with the largest density increase also has the largest rate. Check the final interval carefully.",
      html: [
        "<div class='data-table-wrap'><table class='data-table'><caption>Bacterial density (×10⁴ cells/mL)</caption><thead><tr><th scope='col'>Interval</th><th scope='col'>Time</th><th scope='col'>Density</th></tr></thead><tbody>",
        "<tr><td>1</td><td>0–12 hours</td><td>1.5 → 3.0</td></tr>",
        "<tr><td>2</td><td>12–24 hours</td><td>3.0 → 9.0</td></tr>",
        "<tr><td>3</td><td>24–36 hours</td><td>9.0 → 27.0</td></tr>",
        "<tr><td>4</td><td>36–48 hours</td><td>27.0 → 42.0</td></tr>",
        "</tbody></table></div>",
        "<fieldset class='answer-set'><legend>Which interval has the greatest rate of growth?</legend>",
        "<label class='answer-option'><input type='radio' name='interval' value='1'> Interval 1: 0–12 hours</label>",
        "<label class='answer-option'><input type='radio' name='interval' value='2'> Interval 2: 12–24 hours</label>",
        "<label class='answer-option'><input type='radio' name='interval' value='3'> Interval 3: 24–36 hours</label>",
        "<label class='answer-option'><input type='radio' name='interval' value='4'> Interval 4: 36–48 hours</label>",
        "</fieldset>"
      ].join("")
    },
    conclusion: {
      kicker: "SYSTEM CHECK 05 / CONCLUDE",
      title: "Keep the conclusion within the evidence",
      prompt: "Randomly assigned flasks receiving extra nitrate had significantly higher average microcystin production per cell than control flasks (p < 0.05). A student writes: “Nitrogen pollution is the sole cause of toxic blooms in local waterways. Reducing nitrogen will completely eliminate them.” Choose the strongest critique.",
      hint: "Separate the causal claim this controlled experiment can support from the student's claims about all local waterways and a complete solution.",
      html: [
        "<fieldset class='answer-set'><legend>Which peer-review note is most accurate?</legend>",
        "<label class='answer-option'><input type='radio' name='critique' value='5'> Option 5: A p-value below 0.05 means 95% of individual flasks responded to nitrate.</label>",
        "<label class='answer-option'><input type='radio' name='critique' value='1'> Option 1: The results support an effect of added nitrate under these flask conditions, but do not establish nitrogen as the sole cause of blooms in local waterways or show that reducing it alone will eliminate them.</label>",
        "<label class='answer-option'><input type='radio' name='critique' value='8'> Option 8: Because field conditions differ from lab conditions, the data cannot support any conclusion.</label>",
        "</fieldset>"
      ].join("")
    }
  };

  const dialog = document.getElementById("puzzle-dialog");
  const title = document.getElementById("dialog-title");
  const kicker = document.getElementById("dialog-kicker");
  const prompt = document.getElementById("dialog-prompt");
  const body = document.getElementById("puzzle-body");
  const feedback = document.getElementById("feedback");
  const hintText = document.getElementById("hint-text");
  const checkButton = document.getElementById("check-button");
  const form = document.getElementById("puzzle-form");
  const solved = new Set();
  let currentPuzzle = null;
  let toastTimer = null;

  function loadProgress() {
    try {
      const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
      if (Array.isArray(saved.solved)) {
        saved.solved.forEach(function (key) {
          if (Object.prototype.hasOwnProperty.call(puzzles, key)) solved.add(key);
        });
      }
    } catch (error) {
      // The game remains playable when browser storage is unavailable.
    }
  }

  function saveProgress() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ solved: Array.from(solved) }));
    } catch (error) {
      // The game remains playable when browser storage is unavailable.
    }
  }

  function updateProgress() {
    const count = solved.size;
    document.getElementById("progress-label").textContent = count === 5 ? "ALL SYSTEMS RESTORED" : count + " OF 5 SYSTEMS RESTORED";
    document.getElementById("progress-count").textContent = count + " / 5";
    document.getElementById("progress-bar").value = count;
    Object.keys(puzzles).forEach(function (key) {
      const clue = document.querySelector("[data-clue='" + key + "']");
      const hotspot = document.querySelector("[data-object='" + key + "']");
      if (solved.has(key)) {
        clue.classList.add("is-solved");
        clue.querySelector(".clue-digit").textContent = digitsByPuzzle[key];
        hotspot.classList.add("is-solved");
        hotspot.setAttribute("aria-label", hotspot.getAttribute("data-default-label") + " System restored. Code digit " + digitsByPuzzle[key] + ".");
      } else {
        clue.classList.remove("is-solved");
        clue.querySelector(".clue-digit").textContent = "—";
        hotspot.classList.remove("is-solved");
        hotspot.setAttribute("aria-label", hotspot.getAttribute("data-default-label"));
      }
    });
  }

  function setFeedback(message, kind) {
    feedback.textContent = message;
    feedback.className = "feedback " + (kind ? "is-" + kind : "");
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { toast.classList.remove("is-visible"); }, 3000);
  }

  function openPuzzle(key) {
    currentPuzzle = key;
    const puzzle = puzzles[key];
    document.querySelector(".hint-area").hidden = false;
    kicker.textContent = puzzle.kicker;
    title.textContent = puzzle.title;
    prompt.textContent = puzzle.prompt;
    hintText.textContent = puzzle.hint;
    hintText.hidden = true;
    document.getElementById("hint-button").textContent = "Need a hint?";
    body.innerHTML = puzzle.html;
    feedback.textContent = "";
    feedback.className = "feedback";
    checkButton.hidden = false;
    document.getElementById("cancel-button").hidden = false;

    if (solved.has(key)) {
      body.innerHTML = "<div class='feedback is-success'>This system is restored. Your code digit is <strong>" + digitsByPuzzle[key] + "</strong>.</div>";
      setFeedback("Correct. The evidence check is complete.", "success");
      checkButton.hidden = true;
    }

    if (!dialog.open) dialog.showModal();
    title.focus();
  }

  function openExit() {
    if (solved.size !== 5) {
      showToast("The override keypad is sealed. Restore all five lab systems first.");
      return;
    }
    currentPuzzle = null;
    kicker.textContent = "FINAL OVERRIDE";
    title.textContent = "Enter the five-digit code";
    prompt.textContent = "The notebook has the digits. Enter them in the order of the five systems.";
    body.innerHTML = [
      "<div class='keypad-form'><label class='visually-hidden' for='keypad-input'>Five-digit override code</label>",
      "<input class='keypad-input' id='keypad-input' name='keypad' type='text' inputmode='numeric' autocomplete='one-time-code' maxlength='5' pattern='[0-9]{5}' aria-describedby='keypad-feedback' placeholder='•••••' required>",
      "<button class='button button-primary' id='keypad-submit' type='submit'>Unlock door <span aria-hidden='true'>→</span></button></div>",
      "<p class='keypad-feedback' id='keypad-feedback' aria-live='polite'></p>"
    ].join("");
    hintText.hidden = true;
    document.querySelector(".hint-area").hidden = true;
    feedback.textContent = "";
    feedback.className = "feedback";
    checkButton.hidden = true;
    document.getElementById("cancel-button").hidden = false;
    if (!dialog.open) dialog.showModal();
    document.getElementById("keypad-input").focus();
  }

  function checkPuzzle() {
    if (currentPuzzle === "observations") {
      const selected = Array.from(body.querySelectorAll("input[name='observation']:checked")).map(function (input) { return input.value; }).sort();
      return selected.join(",") === "1,3,5";
    }
    if (currentPuzzle === "hypothesis") {
      const selected = body.querySelector("input[name='hypothesis']:checked");
      return Boolean(selected && selected.value === "B");
    }
    if (currentPuzzle === "design") {
      return body.querySelector("#role-iv").value === "nitrate" &&
        body.querySelector("#role-dv").value === "toxin" &&
        body.querySelector("#role-control").value === "control" &&
        body.querySelector("#role-constants").value === "conditions";
    }
    if (currentPuzzle === "data") {
      const selected = body.querySelector("input[name='interval']:checked");
      return Boolean(selected && selected.value === "3");
    }
    if (currentPuzzle === "conclusion") {
      const selected = body.querySelector("input[name='critique']:checked");
      return Boolean(selected && selected.value === "1");
    }
    return false;
  }

  function errorMessage() {
    if (currentPuzzle === "observations") return "Not quite. Include every direct measurement or description, and leave out explanations of causes.";
    if (currentPuzzle === "hypothesis") return "Look for the statement that names the nitrate change, a measurable result, and a proposed mechanism.";
    if (currentPuzzle === "design") return "One or more matches need another look. What is changed, what is measured, and what stays the same?";
    if (currentPuzzle === "data") return "Try the rates again. Calculate each density change and divide by 12 hours.";
    if (currentPuzzle === "conclusion") return "Check the scope of the evidence. What can a controlled flask experiment support, and what does it not establish about an entire waterway?";
    return "Check your response and try again.";
  }

  function correctMessage() {
    if (currentPuzzle === "observations") return "Exactly. Entries 1, 3, and 5 are measurements or descriptions. Entries 2, 4, and 6 explain possible causes.";
    if (currentPuzzle === "hypothesis") return "Correct. B gives a measurable comparison and a proposed mechanism. A is a testable prediction, but it leaves out the mechanism this challenge asks for.";
    if (currentPuzzle === "design") return "Correct. The nitrate level is changed, microcystin per cell is measured, the unamended flasks are the negative control, and the other conditions are held constant.";
    if (currentPuzzle === "data") return "Correct. Interval 3 rises by 18.0 × 10⁴ cells/mL, or 1.5 × 10⁴ cells/mL per hour. Interval 4 rises by 15.0, so the maximum is unique.";
    if (currentPuzzle === "conclusion") return "Correct. The experiment supports an effect under the tested flask conditions; it does not establish the only cause of local blooms or prove a complete field solution.";
    return "Correct.";
  }

  function handlePuzzleSubmit() {
    if (currentPuzzle === null) {
      const input = document.getElementById("keypad-input");
      const keypadFeedback = document.getElementById("keypad-feedback");
      if (input.value.trim() === CODE) {
        showEnding();
      } else {
        keypadFeedback.textContent = "Code not recognized. Recheck the five notebook digits. There is no penalty for another try.";
        input.select();
      }
      return;
    }

    if (!checkPuzzle()) {
      setFeedback(errorMessage(), "error");
      return;
    }

    solved.add(currentPuzzle);
    saveProgress();
    updateProgress();
    setFeedback(correctMessage() + " Your code digit is " + digitsByPuzzle[currentPuzzle] + ".", "success");
    body.innerHTML = "<div class='system-restored'><span class='restore-symbol' aria-hidden='true'>✓</span><p>System restored. Add this digit to your notebook:</p><strong>" + digitsByPuzzle[currentPuzzle] + "</strong></div>";
    checkButton.hidden = true;
  }

  function showEnding() {
    kicker.textContent = "CONTAINMENT RELEASED";
    title.textContent = "The lab is open.";
    prompt.textContent = "You used observations, a testable explanation, a controlled design, data, and a careful conclusion to restore the system.";
    body.innerHTML = [
      "<div class='ending-card'><div class='ending-symbol' aria-hidden='true'>✓</div>",
      "<h3>Investigation complete</h3>",
      "<p>Your results support a limited conclusion: under the tested conditions, additional nitrate changed microcystin production per cell. A pond-scale conclusion would need field evidence and more than one environmental factor.</p>",
      "<p class='completion-note'>If this is part of a Canvas assignment, submit the completion code there as instructed by your instructor.</p>",
      "</div>"
    ].join("");
    document.querySelector(".hint-area").hidden = true;
    feedback.textContent = "";
    checkButton.hidden = true;
    document.getElementById("cancel-button").textContent = "Return to lab";
    title.focus();
  }

  document.querySelectorAll(".hotspot").forEach(function (hotspot) {
    hotspot.setAttribute("data-default-label", hotspot.getAttribute("aria-label"));
    hotspot.addEventListener("click", function () {
      const object = hotspot.getAttribute("data-object");
      if (object === "exit") openExit();
      else openPuzzle(object);
    });
  });

  document.getElementById("close-dialog").addEventListener("click", function () {
    dialog.close();
  });

  document.getElementById("cancel-button").addEventListener("click", function () {
    dialog.close();
  });

  document.getElementById("hint-button").addEventListener("click", function () {
    hintText.hidden = !hintText.hidden;
    document.getElementById("hint-button").textContent = hintText.hidden ? "Need a hint?" : "Hide hint";
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    handlePuzzleSubmit();
  });

  document.getElementById("reset-button").addEventListener("click", function () {
    const confirmed = window.confirm("Reset all recovered digits and start the escape room again?");
    if (!confirmed) return;
    solved.clear();
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (error) {}
    updateProgress();
    showToast("Notebook cleared. The lab is ready for a new investigation.");
  });

  loadProgress();
  updateProgress();
}());
