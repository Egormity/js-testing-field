// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const lengthOfSequence = (arr, n) =>
//   arr.filter(num => num === n).length === 2
//     ? arr.slice(arr.indexOf(n), arr.lastIndexOf(n) + 1).length
//     : 0;
// console.log(lengthOfSequence([2, 2], 2));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const sumDigits = num =>
//   (num + '')
//     .split('')
//     .filter(num => num !== '-')
//     .reduce((acc, cur) => (acc += +cur), 0);
// console.log(sumDigits(-18));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const solve = s =>
//   s.split('').filter(l => l.toLowerCase() === l).length >= s.length / 2
//     ? s.toLoverCase()
//     : s.toUpperCase();
// console.log(solve('CODde'));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function encrypt(text, n) {
//   const e = t =>
//     t
//       .split('')
//       .filter((n, i) => i % 2 === 1)
//       .join('') +
//     t
//       .split('')
//       .filter((n, i) => i % 2 === 0)
//       .join('');
//   let result = text;
//   for (let i = 0; i < n; i++) {
//     result = e(result);
//   }
//   return result;
// }

// function decrypt(encryptedText, n) {
//   const e = t => {
//     let res = '';
//     let cur = t.length % 2 === 0 ? Math.ceil(t.length / 2) : Math.ceil(t.length / 2) - 1;
//     let def = true;
//     for (let i = 0; i < t.length; i++) {
//       res += t[cur];
//       def ? (cur -= Math.floor(t.length / 2)) : (cur += Math.floor(t.length / 2) + 1);
//       def = !def;
//     }
//     return res;
//   };
//   let result = encryptedText;
//   for (let i = 0; i < n; i++) {
//     result = e(result);
//   }
//   return result;
// }

// console.log(encrypt('0123456', 1));
// console.log(decrypt(encrypt('0123456', 1), 1));

// LEAVE ONLY 1 APPEREANCE NUMBERS -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const array = [1, 1, 2, 2, 3];
// const deleteDuplicates = arr =>
//   arr.filter((el, i) => {
//     const test = arr.slice(0);
//     test.splice(i, 1);
//     return !test.includes(el);
//   });
// console.log(deleteDuplicates(array));

// First non-repeating character -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/// prettier-ignore
// const firstNonRepeatingLetter = str => str.split('').filter((el, i, arr) => {
//     const test = arr.slice(0);
//     test.splice(i, 1);
//     return !test.join('').toLowerCase().includes(el.toLowerCase());
//   }).at(0) || '';

// console.log(firstNonRepeatingLetter('hello'));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const solution = list => {
//   const result = [];
//   for (let i = 0; i < list.length; i++) {
//     const num1 = list[i];
//     const tester = [num1];
//     let counter = 1;

//     if (result?.at(-1)?.at(-1) >= num1) continue;

//     for (let j = i; j < list.length; j++) {
//       const num2 = list[j];
//       if (num1 + counter === num2) {
//         tester.push(num2);
//         counter++;
//       }
//     }
//     result.push(tester);
//   }

//   return result
//     .map(el => {
//       if (el.length >= 3) return el.at(0) + '-' + el.at(-1);
//       return el + '';
//     })
//     .join(',');
// };
// console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

// Next bigger number with the same digits -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// var results = [];
// function permute(arr, memo) {
//   var cur;
//   var memo = memo || [];

//   for (var i = 0; i < arr.length; i++) {
//     cur = arr.splice(i, 1);

//     if (arr.length === 0) {
//       results.push(+memo.concat(cur).join(''));
//     }

//     permute(arr.slice(), memo.concat(cur));
//     arr.splice(i, 0, cur[0]);
//   }
//   return results;
// }

// const nextBigger = n =>
//   permute((n + '').split(''))
//     .sort((a, b) => a - b)
//     .find(el => el > n) || -1;

// console.log(nextBigger(111));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const countNums = nums => nums.reduce((cur, acc) => +acc + cur, 0);
// const countDiffer = (a, b) => a.reduce((cur, acc) => +acc + cur, 0) - b.reduce((cur, acc) => +acc + cur, 0);
// const orderWeight = str =>
//   str
//     .split(' ')
//     .map(el => el.split(''))
//     .sort((a, b) => countDiffer(a, b))
//     .sort((a, b) => countNums(a) === countNums(b) && +a[0] - +b[0])
//     .join(' ')
//     .replaceAll(',', '');

// console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const nums = str => {
//   let tester = true;
//   return str
//     .split('')
//     .reverse()
//     .filter(el => {
//       if (isNaN(+el)) {
//         tester = false;
//         return false;
//       }
//       if (!isNaN(+el) && tester) return true;
//     })
//     .reverse()
//     .join('');
// };
// const incrementString = str =>
//   str.slice(0, str.length - nums(str).length) + (+nums(str) + 1).toString().padStart(nums(str).length, '0');

// Scramblies -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function scramble(str1, str2) {
//   const arr1 = str1.split('');
//   return str2.split('').every(el => {
//     const result = arr1.join('').includes(el);
//     arr1.splice(arr1.indexOf(el), 1);
//     return result;
//   });
// }
// console.log(scramble('scriptingjava', 'javascript'));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function sumIntervals(intervals) {
//   const result = [];
//   for (let i = 0; i < intervals.length; i++) {
//     for (let j = intervals[i][0]; j < intervals[i][1]; j++) {
//       result.push(j);
//     }
//   }
//   return [...new Set(result)].reduce((acc, cur) => acc + 1, 0);
// }

// console.log(
//   sumIntervals([
//     [0, 20],
//     [-100000000, 10],
//     [30, 40],
//   ])
// );

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function primeFactors(n) {
//   let dictinary = {};

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     let count = 0;

//     for (let j = 1; j <= i; j++) {
//       if ((i / j) % 1 === 0) count++;
//     }

//     if (count === 2 && (n / i) % 1 === 0) {
//       while ((n / i) % 1 === 0) {
//         dictinary[i] ? (dictinary[i] += 1) : (dictinary[i] = 1);
//         n /= i;
//       }
//     }
//   }

//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if ((n / i) % 1 === 0) count++;
//   }
//   if (count === 2) dictinary[n] = 1;

//   let result = '';
//   for (const num in dictinary) {
//     result += dictinary[num] === 1 ? `(${num})` : `(${num}**${dictinary[num]})`;
//   }

//   return result;
// }
// console.log(primeFactors(7775460));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const refactor = str => str.replace(/[^a-z]/g, '');

// const createDic = str => {
//   const obj = {};
//   for (let i = 0; i < str.length; i++) {
//     !obj[str[i]] ? (obj[str[i]] = 1) : (obj[str[i]] += 1);
//   }
//   return obj;
// };

// const mix = (s1, s2) => {
//   s1 = refactor(s1);
//   s2 = refactor(s2);

//   const dic1 = createDic(s1);
//   const dic2 = createDic(s2);

//   const result = [];

//   for (const char in Object.keys(dic1).length > Object.keys(dic2).length ? dic1 : dic2) {
//     if (dic1[char] === dic2[char]) result.push('3:' + char.repeat(dic1[char]));
//     if (!dic2[char] || dic1[char] > dic2[char]) result.push('1:' + char.repeat(dic1[char]));
//     if (!dic1[char] || dic2[char] > dic1[char]) result.push('2:' + char.repeat(dic2[char]));
//   }

//   return result
//     .sort((a, b) => {
//       if (b.length - a.length !== 0) return b.length - a.length;
//       if (+a[0] - +b[0] !== 0) return +a[0] - +b[0];
//       return a[2].localeCompare(b[2]);
//     })
//     .filter(res => res.length > 3)
//     .join('/')
//     .replaceAll('3', '=');
// };

// console.log(
//   mix('Are they here', 'yes, they are here')
//   //   mix('mmmmm ', 'my frie n d Joh n has ma n y ma n y frie n ds n')
//   //   mix('1:aaa/1:nnn/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt, ', '')
// );

// console.log(
//   '1:aaa/1:nnn/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt' === '1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt'
// );

///////// const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

///////// function mix(s1, s2) {
/////////   return alphabet
/////////     .map(char => {
/////////       const s1Count = s1.split('').filter(x => x === char).length,
/////////             s2Count = s2.split('').filter(x => x === char).length,
/////////             maxCount = Math.max(s1Count, s2Count);

/////////       return {
/////////         char: char,
/////////         count: maxCount,
/////////         src: maxCount > s1Count ? '2' : maxCount > s2Count ? '1' : '='
/////////      };
/////////    })
/////////    .filter(c => c.count > 1)
/////////    .sort((objA, objB) => objB.count - objA.count || (objA.src + objA.char > objB.src + objB.char ? 1 : -1))
/////////     .map(c => `${c.src}:${c.char.repeat(c.count)}`)
/////////     .join('/');
///////// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const compute = ip => ip.split('.').map((el, i) => +el * 256 ** (3 - i)).reduce((cur, acc) => acc + cur, 0);
// const ipsBetween = (start, end) => compute(end) - compute(start);

// console.log(ipsBetween('1.2.3.4', '5.6.7.8'));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function getCombinations(chars, len) {
//   const result = [];
//   const f = function(prefix, chars) {
//     for (let i = 0; i < chars.length; i++) {
//       const elem = [...prefix, chars[i]];
//       if(elem.length == len)
//         result.push(elem);
//       f(elem, chars.slice(i + 1));
//     }
//   }
//   f([], chars);
//   return result;
// }

// const chooseBestSum = (t, k, ls) => {
//   if (!ls) return null;

//   const closestArr = getCombinations(ls, k)
//     .join('/')
//     .split('/')
//     .map(el => el.split(',').reduce((acc, cur) => acc + +cur, 0))
//     .filter(el => el <= t);

//   return closestArr.length === 0
//     ? null
//     : closestArr.reduce((prev, curr) => (Math.abs(curr - t) < Math.abs(prev - t) ? curr : prev)) || null;
// };

// console.log(chooseBestSum(225, 3, [91, 74, 73, 85, 73, 81, 87]));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const gap = (g, m, n) => {
//   const primals = [];
//   for (let i = m; i < n; i++) {
//     let counter = 0;
//     for (let j = 2; j * j < i; j++) {
//       if (i % j === 0) counter++;
//       if (counter === 1) break;
//     }
//     if (counter === 0) primals.push(i);
//   }

//   const result = [];
//   for (let i = 0; i < primals.length; i++) {
//     if (primals[i + 1] - primals[i] === g) {
//       result.push(primals[i], primals[i + 1]);
//       break;
//     }
//   }

//   return result.length !== 0 ? result : null;
// };

// console.log(gap(8, 300, 400));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function alphanumeric(string) {
//   return string.match(/[A-Za-z0-9]/g).join('') === string;
// }

// console.log(alphanumeric('asd1'));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// var sum_pairs=function(ints, s){
//   var seen = {}
//   for (var i = 0; i < ints.length; ++i) {
//     if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
//     seen[ints[i]] = true
//   }
// }

// console.log(sumPairs([2, 1, 3, 4, 1, 0], 2));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const isSolved = b => {
//   const arr = [];
//   b.forEach(row => row.forEach(el => arr.push(el)));

//   if (arr[0] !== 0 && arr[0] === arr[1] && arr[0] === arr[2]) return arr[0];
//   if (arr[3] !== 0 && arr[3] === arr[4] && arr[3] === arr[5]) return arr[3];
//   if (arr[6] !== 0 && arr[6] === arr[7] && arr[6] === arr[8]) return arr[6];

//   if (arr[0] !== 0 && arr[0] === arr[3] && arr[0] === arr[6]) return arr[0];
//   if (arr[1] !== 0 && arr[1] === arr[4] && arr[1] === arr[7]) return arr[0];
//   if (arr[2] !== 0 && arr[2] === arr[5] && arr[2] === arr[8]) return arr[0];

//   if (arr[0] !== 0 && arr[0] === arr[4] && arr[0] === arr[8]) return arr[0];
//   if (arr[2] !== 0 && arr[2] === arr[4] && arr[2] === arr[6]) return arr[0];

//   let result = 0;
//   arr.forEach(el => {
//     if (el === 0) result = -1;
//   });

//   return result;
// };

// function isSolved(board) {
//   board = board.join('-').replace(/,/g,'');
//   if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
//   if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
//   if(/0/.test(board)) return -1;
//   return 0;
// }

// console.log(
//   isSolved([
//     [1, 1, 1],
//     [0, 2, 2],
//     [0, 0, 0],
//   ])
// );

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const polyndrom = w => w === w.split('').reverse().join('');
// console.log(polyndrom('мадам'));

// const shortest = str => str.split(' ').sort((a, b) => a.length - b.length)[0];
// console.log(shortest('Вчера мои друзья приходили ко мне'));

// // prettier-ignore
// const initials = str => str.split(' ').map(el => el[0].toUpperCase()).join('.');
// console.log(initials('иван иванов'));

// const delay = arr => {
//   let timeout = 1;
//   arr
//     .filter(el => el % 1 === 0)
//     .forEach(el => {
//       setTimeout(() => console.log(el), timeout * 1000);
//       timeout++;
//     });
//   return 'solved';
// };
// console.log(delay([1, 5, 1.2, 8, 6.4, 0]));

(async () => {
  try {
    const res = await fetch('http://185.244.172.108:8081/v1/outlay-rows/entity/create', { method: 'POST' });
    const data = await res.json();
    const id = 1;

    console.log(id);
    await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/${id}/row/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: 98573,
        rowName: 'string',
        total: 0,
        salary: 2033,
        mimExploitation: 0,
        machineOperatorSalary: 0,
        materials: 0,
        mainCosts: 0,
        supportCosts: 0,
        equipmentCosts: 0,
        overheads: 0,
        estimatedProfit: 0,
        child: [],
      }),
    });

    const res2 = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/${id}/row/list`, {
      method: 'GET',
    });
    const data2 = await res2.json();
    console.log(data2);
  } catch (err) {
    console.log(err);
  }
})();

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
