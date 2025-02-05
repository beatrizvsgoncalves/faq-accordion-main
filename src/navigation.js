import toggle from "./toggle.js";

export default function keyDown() {
	const focusableElements = document.querySelectorAll(".focusable");
	let currentIndex = 0;

	focusableElements.forEach((el, index) => {
		el.addEventListener("focus", () => {
			currentIndex = index;
		});

		el.addEventListener("keydown", (event) => {
			if (event.key === "Tab") {
				event.preventDefault();
				if (event.shiftKey) {
					currentIndex =
						(currentIndex - 1 + focusableElements.length) %
						focusableElements.length;
				} else {
					currentIndex = (currentIndex + 1) % focusableElements.length;
				}
				focusableElements[currentIndex].focus();
			} else if (event.key === "Enter") {
				toggle(focusableElements[currentIndex]);
			}
		});
	});
}
