debugger;

const repeatingList = (text, repetitions) => { };


console.log('-- testing repeatingList component --\n');

const testRepeatingList = (component, text, repetitions) => {
  const correctNodeName = component.nodeName === 'OL';
  const numberOfChildren = component.childElementCount === repetitions;

  console.assert(correctNodeName, 'it should be an OL');
  console.assert(numberOfChildren, 'it should have ' + repetitions + ' children');

  for (let i = 0; i < repetitions; i++) {
    const childShouldBeLI = component.children[i].nodeName === 'LI';
    const childInnerHTML = component.children[i].innerHTML === text;

    console.assert(childShouldBeLI, 'child ' + i + ' should be an LI');
    console.assert(childInnerHTML, 'child ' + i + ' innerHTML should be ' + text);
  };
}


console.log('-- Test 1:\n');

const text1 = 'worddd!';
const repetitions1 = 0;
const component1 = repeatingList(text1, repetitions1);
testRepeatingList(component1, text1, repetitions1);


console.log('-- Test 2:\n');

const text2 = '        ';
const repetitions2 = 8;
const component2 = repeatingList(text2, repetitions2);
testRepeatingList(component2, text2, repetitions2);


console.log('-- Test 3:\n');

const text3 = 'i love javascript';
const repetitions3 = 12;
const component3 = repeatingList(text3, repetitions3);
testRepeatingList(component3, text3, repetitions3);


console.log('-- Test 4:\n');

const text4 = '--={}=--';
const repetitions4 = 3;
const component4 = repeatingList(text4, repetitions4);
testRepeatingList(component4, text4, repetitions4);


console.log('-- Test 5:\n');

const text5 = 'way too many items';
const repetitions5 = 30;
const component5 = repeatingList(text5, repetitions5);
testRepeatingList(component5, text5, repetitions5);
