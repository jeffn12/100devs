//Write your pseduo code first!
/**
 * click event
 *  get input temperature
 *  convert input temperature to opposite unit
 *   if unit is F:
 *     multiply by 9/5
 *     add 32
 *   if unit is C:
 *     subtract 32
 *     multiply by 5/9
 *  return converted temperature
 */
document.querySelector("#convert_btn").addEventListener("click", convert);

function convert() {
  document.querySelector("#display").innerText =
    (document.querySelector("#input_temperature").value - 32) * (5 / 9);
}
