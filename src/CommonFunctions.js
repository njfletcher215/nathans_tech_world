export function showTargetClass(event, targetClass) {
    let elements = document.getElementsByClassName(targetClass);
    setTimeout(() => {
        for (let i = 0; i < elements.length; i++) {
            if (event.target.className !== "" && event.target.matches('.' + event.target.className + ':hover')) {
                elements[i].style.display = 'block';
            }
        }
    }, 500);
}
  
export function hideTargetClass(event, targetClass) {
    let elements = document.getElementsByClassName(targetClass);
    setTimeout(() => {
        for (let i = 0; i < elements.length; i++) {
            if (event.target.className === "" || !event.target.matches('.' + event.target.className + ':hover')) {
                elements[i].style.display = 'none';
            }
        }
    }, 500);
}