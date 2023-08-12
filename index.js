const questions = [
  {
    question: `Please do the following calculation: \\( (-a+3b)-(8a+b)\\)`,
    answers: [
      { text: `\\(-9a+4b \\)`, correct: false },
      { text: `\\(-8a+2b \\)`, correct: false },
      { text: `\\(-9a+2b \\)`, correct: true },
      { text: `\\(-7a+4b\\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation: \\((-3a-5b)+(7a-2b)\\)`,
    answers: [
      { text: `\\(4a^2-7b^2 \\)`, correct: false },
      { text: `\\(-10a-3b \\)`, correct: false },
      { text: `\\(-3ab \\)`, correct: false },
      { text: `\\(4a-7b \\)`, correct: true },
    ],
  },
  {
    question: `Please do the following calculation: \\( 4a-5(4a-3b) \\)`,
    answers: [
      { text: `\\( -16a-15b \\)`, correct: false },
      { text: `\\( -16a+15b \\)`, correct: true },
      { text: `\\( -16a+15 \\)`, correct: false },
      { text: `\\( 24a+15b \\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation. Simplify your answer: \\( \\dfrac{x+4}{2}+\\dfrac{3x-7}{3} \\)`,
    answers: [
      { text: `\\( 3x-1 \\)`, correct: false },
      { text: `\\( 9x-2 \\)`, correct: false },
      { text: `\\( \\dfrac{9x-5}{6} \\)`, correct: false },
      { text: `\\( \\dfrac{9x-2}{6} \\)`, correct: true },
    ],
  },
  {
    question: `Please do the following calculation. Simplify your answer: \\( (3x-6y-12) \\times \\left(-\\dfrac{2}{3} \\right) \\)`,
    answers: [
      { text: `\\( -x+2y+4 \\)`, correct: false },
      { text: `\\( -2x+2y+4 \\)`, correct: false },
      { text: `\\( -2x+4y+8 \\)`, correct: true },
      { text: `\\( 2x-4y-8 \\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation: \\( -2x \\times 5y \\)`,
    answers: [
      { text: `\\( 3xy \\)`, correct: false },
      { text: `\\( -7xy \\)`, correct: false },
      {
        text: `\\( -10xy \\)`,
        correct: true,
      },
      { text: `\\( -\\dfrac{2}{5}xy  \\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation. Simplify your answer: \\( \\dfrac{5}{4}a^4b^3 \\div \\dfrac{3}{10}a^3b^3 \\)`,
    answers: [
      { text: `\\( \\dfrac{13a}{2} \\)`, correct: false },
      { text: `\\( \\dfrac{25}{6a} \\)`, correct: false },
      { text: `\\( \\dfrac{25a}{6} \\)`, correct: true },
      { text: `\\( 13a \\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation: <br> \\( a^4\\times a^2 \\div a^3 \\)`,
    answers: [
      { text: `\\( a^3 \\)`, correct: true },
      { text: `\\( a^5 \\)`, correct: false },
      { text: `\\( \\dfrac{a^4a^3}{a^3} \\)`, correct: false },
      { text: `\\( 2a^3 \\)`, correct: false },
    ],
  },
  {
    question: `Please solve the following system of equations: <br> \\(\\quad \\left\\{ \\begin{align*}7x-2y &=-25 \\\\ -5x+2y &=19  \\end{align*} \\right . \\)`,
    answers: [
      { text: `\\( (x,y)=(-7,4) \\)`, correct: false },
      { text: `\\( (x,y)=(3,23) \\)`, correct: false },
      { text: `\\( (x,y)=(-5,-5) \\)`, correct: false },
      { text: `\\( (x,y)=(-3,2) \\)`, correct: true },
    ],
  },
  {
    question: `Please solve the following system of equations: <br> \\(\\quad \\left\\{ \\begin{align*} 5x+2y &=11 \\\\ 3x+2y &=5  \\end{align*} \\right . \\)`,
    answers: [
      { text: `\\( (x,y)=(3,-2) \\)`, correct: true },
      {
        text: `\\( (x,y)= \\left(2,-\\dfrac{1}{2} \\right) \\)`,
        correct: false,
      },
      { text: `\\( (x,y)=(3,-5) \\)`, correct: false },
      { text: `\\( (x,y)=(2,1) \\)`, correct: false },
    ],
  },
  {
    question: `Please solve the following system of equations: <br> \\(\\quad \\left\\{ \\begin{align*} 8x-7y &=11 \\\\ 3x-6y &=-6  \\end{align*} \\right . \\)`,
    answers: [
      { text: `\\( (x,y)=(4,3) \\)`, correct: true },
      { text: `\\( (x,y)=(7,3) \\)`, correct: false },
      { text: `\\( (x,y)=(3,2) \\)`, correct: false },
      { text: `\\( (x,y)=(4,2) \\)`, correct: false },
    ],
  },
  {
    question: `Please solve the following system of equations: <br> \\(\\quad \\left\\{ \\begin{align*} -4x-6y =12 \\\\ x =-4y+7  \\end{align*} \\right . \\)`,
    answers: [
      { text: `\\( (x,y)=(-3,2) \\)`, correct: false },
      { text: `\\( (x,y)=(-9,4) \\)`, correct: true },
      { text: `\\( (x,y)=\\left(2,-\\dfrac{1}{3}\\right) \\)`, correct: false },
      { text: `\\( (x,y)=(3,1) \\)`, correct: false },
    ],
  },
  {
    question: `Please solve the following system of equations: <br> \\(\\quad \\left\\{ \\begin{align*} 7x-8y &=4 \\\\ 6x-4y &= -3  \\end{align*} \\right . \\)`,
    answers: [
      {
        text: `\\( (x,y)= \\left(10, -\\dfrac{33}{4}\\right) \\)`,
        correct: false,
      },
      {
        text: `\\( (x,y)= \\left(-2, -\\dfrac{9}{4}\\right) \\)`,
        correct: false,
      },
      {
        text: `\\( (x,y)= \\left(7, -\\dfrac{45}{8}\\right) \\)`,
        correct: false,
      },
      {
        text: `\\( (x,y)= \\left(-\\dfrac{7}{5}, -\\dfrac{69}{40}\\right) \\)`,
        correct: true,
      },
    ],
  },
  {
    question: `Please solve the following system of equations: <br> \\(\\quad \\left\\{ \\begin{align*} x+y &=15 \\\\ 80x+50y &=1020  \\end{align*} \\right . \\)`,
    answers: [
      { text: `\\( (x,y)=(8,7) \\)`, correct: false },
      { text: `\\( (x,y)=(9,6) \\)`, correct: true },
      { text: `\\( (x,y)=(-9,24) \\)`, correct: false },
      { text: `\\( (x,y)=(6,9) \\)`, correct: false },
    ],
  },
  {
    question: `Please solve the following system of equations:  \\(\\quad \\left\\{ \\begin{align*} x+y &=15 \\\\ 80x+50y &=1020  \\end{align*} \\right . \\)`,
    answers: [
      { text: `\\( (x,y)=(8,7) \\)`, correct: false },
      { text: `\\( (x,y)=(9,6) \\)`, correct: true },
      { text: `\\( (x,y)=(-9,24) \\)`, correct: false },
      { text: `\\( (x,y)=(6,9) \\)`, correct: false },
    ],
  },
  {
    question: `Please solve the following system of equations:  \\[\\quad \\left\\{ \\begin{align*} 2(x-3) &=3(y-5) \\\\ 5(y-5) &= -x+2(y+1)  \\end{align*} \\right . \\]`,
    answers: [
      { text: `\\( (x,y)=(18,15) \\)`, correct: false },
      { text: `\\( (x,y)=(6,7) \\)`, correct: true },
      {
        text: `\\( (x,y)=\\left(\\dfrac{11}{3},16\\right) \\)`,
        correct: false,
      },
      { text: `\\( (x,y)=(-6,-1) \\)`, correct: false },
    ],
  },
  {
    question: `Please solve the following system of equations:  \\[\\quad \\left\\{ \\begin{align*} 0.03x-0.02y &=0.13 \\\\ 0.05x-0.06y &= 0.27  \\end{align*} \\right . \\]`,
    answers: [
      { text: `\\( (x,y)=(13,-6) \\)`, correct: false },
      { text: `\\( (x,y)=(3,4) \\)`, correct: false },
      { text: `\\( (x,y)=(7,-2) \\)`, correct: false },
      { text: `\\( (x,y)=(3,-2) \\)`, correct: true },
    ],
  },
  {
    question: `Please solve the following system of equations:  \\[\\quad \\left\\{ \\begin{align*} &\\dfrac{5}{8}x-2 =-\\dfrac{y}{2} \\\\ &\\dfrac{3}{4}x+\\dfrac{2}{3}y  = 3   \\end{align*} \\right . \\]`,
    answers: [
      { text: `\\( (x,y)=(-5,-\\dfrac{41}{4}) \\)`, correct: false },
      { text: `\\( (x,y)=(-4,4) \\)`, correct: false },
      { text: `\\( (x,y)=(-4,9) \\)`, correct: true },
      { text: `\\( (x,y)=(4,-1) \\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation <br><br> \\( 7a(5a+3b) \\)`,
    answers: [
      { text: `\\( 35a^2+21ab \\)`, correct: true },
      { text: `\\( 56ab \\)`, correct: false },
      { text: `\\( 35a+21ab \\)`, correct: false },
      { text: `\\( 12a^2+10ab \\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation <br><br> \\( (4x+1)(x^2+8x+3) \\)`,
    answers: [
      { text: `\\( 4x^3+33x^2+4x+3 \\)`, correct: false },
      { text: `\\( 4x^3+33x^2+20x+3 \\)`, correct: true },
      { text: `\\( 4x^3+32x^2+12x \\)`, correct: false },
      { text: `\\( 4x^3+32^2+12x+x^2+8x+3 \\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation <br><br> \\( (12x^3y^2-15x^2y^3)\\div(-3x^2y^2)= \\)`,
    answers: [
      { text: `\\( 4x-5y \\)`, correct: false },
      { text: `\\( -4x^2+5y \\)`, correct: false },
      { text: `\\( 3x+4y \\)`, correct: false },
      { text: `\\( -4x+5y \\)`, correct: true },
    ],
  },
  {
    question: `Please do the following calculation <br><br> \\( (12a^2-4ab^2)\\div(-\\dfrac{2}{3}ab)= \\)`,
    answers: [
      { text: `\\( 18a+6b \\)`, correct: false },
      { text: `\\( -18a^3b^2+6a^2b^3 \\)`, correct: false },
      { text: `\\( 12ab^2+6b \\)`, correct: false },
      { text: `\\( -18a+6b \\)`, correct: true },
    ],
  },
  {
    question: `Please do the following calculation <br><br> \\( (2x-5)^2 \\)`,
    answers: [
      { text: `\\( 4x^2-20x+25 \\)`, correct: true },
      { text: `\\( 4x^2+20x-25 \\)`, correct: false },
      { text: `\\( 2x^2-20x+25 \\)`, correct: false },
      { text: `\\( 4x^2-25 \\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation <br><br> \\( (3x+2y)(3x-2y) \\)`,
    answers: [
      { text: `\\( 9x^2-4y^2 \\)`, correct: true },
      { text: `\\( 6x^2-4y^2 \\)`, correct: false },
      { text: `\\( 9x^2+4y^2 \\)`, correct: false },
      { text: `\\( 9x^2-4 \\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation <br><br> \\( (x+1)(x-9) \\)`,
    answers: [
      { text: `\\( x^2-9 \\)`, correct: false },
      { text: `\\( x^2-8x-9 \\)`, correct: true },
      { text: `\\( x^2-7x-9 \\)`, correct: false },
      { text: `\\( x^2-8x+9 \\)`, correct: false },
    ],
  },
  {
    question: `Please factor the following polynomial. <br><br> \\( x^2-4xy+4y^2= \\)`,
    answers: [
      { text: `\\( (x-2y)(x+2y) \\)`, correct: false },
      { text: `\\( (x-2y)^2 \\)`, correct: true },
      { text: `\\( (x+2y)^2 \\)`, correct: false },
      { text: `\\( (x-4y)(x+y) \\)`, correct: false },
    ],
  },
  {
    question: `Please factor the following polynomial. <br><br> \\( 16x^2-49y^2= \\)`,
    answers: [
      { text: `\\( (2x-7y)^2 \\)`, correct: false },
      { text: `\\( (4x+7y)^2 \\)`, correct: false },
      { text: `\\( (4x+7y)(4x-7y) \\)`, correct: true },
      { text: `\\( (2x+7y)(2x-7y) \\)`, correct: false },
    ],
  },
  {
    question: `Please factor the following polynomial. <br><br> \\( x^2-7x-18= \\)`,
    answers: [
      { text: `\\( (x+9)(x-2) \\)`, correct: false },
      { text: `\\( (x+3)(x-6) \\)`, correct: false },
      { text: `\\( (x-9)(x+2) \\)`, correct: true },
      { text: `\\( (x-9)^2 \\)`, correct: false },
    ],
  },
  {
    question: `Please factor the following polynomial. <br><br> \\( 5x^2y^2+20xy= \\)`,
    answers: [
      { text: `\\( 5xy(xy+1) \\)`, correct: false },
      { text: `\\( xy(5xy+20) \\)`, correct: false },
      { text: `\\( 5xy(xy^2+4y) \\)`, correct: false },
      { text: `\\( 5xy(xy+4) \\)`, correct: true },
    ],
  },
  {
    question: `Please factor the following polynomial. <br><br> \\( 5a^2x^2+45ax^2= \\)`,
    answers: [
      { text: `\\( 5ax^2(5a+9) \\)`, correct: false },
      { text: `\\( 5ax^2(a+9) \\)`, correct: true },
      { text: `\\( 50a^2x^2 \\)`, correct: false },
      { text: `\\( 5ax(ax+9x) \\)`, correct: false },
    ],
  },
  {
    question: `Please factor the following polynomial. <br><br> \\( ax^2+2axy+ay^2= \\)`,
    answers: [
      { text: `\\( ay(x+1)^2 \\)`, correct: false },
      { text: `\\( a(x+y)^2 \\)`, correct: true },
      { text: `\\( a(x+y)(x+y) \\)`, correct: true },
      { text: `\\( (ax+y)^2 \\)`, correct: false },
    ],
  },
  {
    question: `Please factor the following polynomial. <br><br> \\( 2(x+10)-(x-2)^2= \\)`,
    answers: [
      { text: `\\( 4(x-4) \\)`, correct: false },
      { text: `\\( -(x+2)(x-8) \\)`, correct: true },
      { text: `\\( -(x-4)(x+6) \\)`, correct: false },
      { text: `\\( -(x^2-6x-6) \\)`, correct: false },
    ],
  },
  {
    question: `Please factor the following polynomial. <br><br> \\( -2x^2-10x+72= \\)`,
    answers: [
      { text: `\\( -2(x+9)(x-4) \\)`, correct: true },
      { text: `\\( (2x+9)(-x-4) \\)`, correct: false },
      { text: `\\( -2(x-9)(x+4) \\)`, correct: false },
      { text: `\\( (-2x+9)(x-4) \\)`, correct: false },
    ],
  },
  {
    question: `Rationalize the denominator. <br><br> \\( \\dfrac{5}{\\sqrt{3}} \\)`,
    answers: [
      { text: `\\( \\dfrac{5\\sqrt{3}}{3} \\)`, correct: true },
      { text: `\\( \\dfrac{\\sqrt{3}}{5} \\)`, correct: false },
      { text: `\\( \\dfrac{\\sqrt{75}}{3} \\)`, correct: false },
      { text: `\\( \\dfrac{\\sqrt{15}}{3} \\)`, correct: false },
    ],
  },
  {
    question: `Rationalize the denominator. <br><br> \\( \\dfrac{\\sqrt{5}}{\\sqrt{6}} \\)`,
    answers: [
      { text: `\\( \\dfrac{\\sqrt{11}}{6} \\)`, correct: false },
      { text: `\\( \\dfrac{\\sqrt{5}}{6} \\)`, correct: false },
      { text: `\\( \\dfrac{\\sqrt{30}}{6} \\)`, correct: true },
      { text: `\\( \\dfrac{3\\sqrt{10}}{6} \\)`, correct: false },
    ],
  },
  {
    question: `Rationalize the denominator. <br><br> \\( \\dfrac{3}{\\sqrt{7}} \\)`,
    answers: [
      { text: `\\( 3\\sqrt{21} \\)`, correct: false },
      { text: `\\( \\dfrac{\\sqrt{21}}{7} \\)`, correct: false },
      { text: `\\( \\dfrac{3\\sqrt{7}}{7} \\)`, correct: true },
      { text: `\\( \\dfrac{7\\sqrt{7}}{7} \\)`, correct: false },
    ],
  },
  {
    question: `Simplify the square root using the form \\( \\square\\sqrt{\\square} \\). <br><br> \\( \\sqrt{72} \\)`,
    answers: [
      { text: `\\( 16\\sqrt{7} \\)`, correct: false },
      { text: `\\( 36\\sqrt{2} \\)`, correct: false },
      { text: `\\( 6\\sqrt{2} \\)`, correct: true },
      { text: `\\( 3\\sqrt{16} \\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation. <br><br> \\( \\sqrt{3} \\times \\sqrt{5}= \\)`,
    answers: [
      { text: `\\( 3\\sqrt{5} \\)`, correct: false },
      { text: `\\( \\sqrt{15} \\)`, correct: true },
      { text: `\\( \\sqrt{45} \\)`, correct: false },
      { text: `\\( 5\\sqrt{3} \\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation. <br><br> \\( \\sqrt{96} \\times \\sqrt{8}= \\)`,
    answers: [
      { text: `\\( 4\\sqrt{43} \\)`, correct: false },
      { text: `\\( 2\\sqrt{3} \\)`, correct: false },
      { text: `\\( 8\\sqrt{12} \\)`, correct: false },
      { text: `\\( 16\\sqrt{3} \\)`, correct: true },
    ],
  },
  {
    question: `Please do the following calculation. <br><br> \\( \\sqrt{75} \\div \\sqrt{15}= \\)`,
    answers: [
      { text: `\\( 2\\sqrt{3} \\)`, correct: false },
      { text: `\\( 2\\sqrt{5} \\)`, correct: false },
      { text: `\\( \\sqrt{3} \\)`, correct: true },
      { text: `\\( \\sqrt{5} \\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation. <br><br> \\( \\sqrt{54} \\times 4\\sqrt{3} \\div (-2\\sqrt{6})= \\)`,
    answers: [
      { text: `\\( 6\\sqrt{3} \\)`, correct: false },
      { text: `\\( 2\\sqrt{27} \\)`, correct: false },
      { text: `\\( -6\\sqrt{3} \\)`, correct: true },
      { text: `\\( -72\\sqrt{3} \\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation. <br><br> \\( \\sqrt{2} + \\sqrt{2} = \\)`,
    answers: [
      { text: `\\( 2 \\)`, correct: false },
      { text: `\\( \\sqrt{4} \\)`, correct: false },
      { text: `\\( 2\\sqrt{2} \\)`, correct: true },
      { text: `\\( 4 \\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation. <br><br> \\( 4\\sqrt{7} - \\sqrt{2} + 5\\sqrt{2} - 2\\sqrt{7} = \\)`,
    answers: [
      { text: `\\( 6\\sqrt{14} \\)`, correct: false },
      { text: `\\( 2\\sqrt{7} +4\\sqrt{2} \\)`, correct: true },
      { text: `\\( -6\\sqrt{7} - 6\\sqrt{2} \\)`, correct: false },
      { text: `\\( -8\\sqrt{7} - 5\\sqrt{2} \\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation. <br><br> \\( \\dfrac{3}{\\sqrt{7}} - \\dfrac{7\\sqrt{7}}{7} = \\)`,
    answers: [
      { text: `\\( \\dfrac{4\\sqrt{7}}{7} \\)`, correct: false },
      { text: `\\( \\sqrt{7} \\)`, correct: false },
      { text: `\\( -\\dfrac{4\\sqrt{7}}{7} \\)`, correct: true },
      { text: `\\( -4 \\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation. <br><br> \\( \\sqrt{8}+2\\sqrt{72}-3\\sqrt{18} = \\)`,
    answers: [
      { text: `\\( 10\\sqrt{8}+3\\sqrt{18} \\)`, correct: false },
      { text: `\\( 11\\sqrt{2} \\)`, correct: true },
      { text: `\\( 5\\sqrt{62} \\)`, correct: false },
      { text: `\\( 5\\sqrt{2} \\)`, correct: false },
    ],
  },
  {
    question: `Please do the following calculation. <br><br> \\( \\sqrt{18} +\\sqrt{50}-\\dfrac{6}{\\sqrt{2}} = \\)`,
    answers: [
      { text: `\\( \\sqrt{2} \\)`, correct: false },
      { text: `\\( 4\\sqrt{2} \\)`, correct: false },
      { text: `\\( 5\\sqrt{2} \\)`, correct: true },
      { text: `\\( -5\\sqrt{2} \\)`, correct: false },
    ],
  },
  {
    question: `Please solve the following equation. <br><br> \\( x^2-4=0 \\)`,
    answers: [
      { text: `\\( x=\\pm \\sqrt{4} \\)`, correct: false },
      { text: `\\( x=\\pm 2 \\)`, correct: true },
      { text: `\\( x= 2 \\)`, correct: false },
      { text: `\\( x= \\pm \\sqrt{2} \\)`, correct: false },
    ],
  },
  {
    question: `Please solve the following equation. <br><br> \\( 16x^2-48=52 \\)`,
    answers: [
      { text: `\\( x=\\pm \\dfrac{5}{2} \\)`, correct: true },
      { text: `\\( x= \\dfrac{5}{2} \\)`, correct: false },
      { text: `\\( x=\\pm \\dfrac{5}{4} \\)`, correct: false },
      { text: `\\( x= -\\dfrac{5}{2} \\)`, correct: false },
    ],
  },
  {
    question: `Please solve the following equation. <br><br> \\( 3x^2-18=0 \\)`,
    answers: [
      { text: `\\( x=\\pm \\dfrac{\\sqrt{6}}{3} \\)`, correct: false },
      { text: `\\( x=\\pm \\sqrt{6} \\)`, correct: true },
      { text: `\\( x= 6 \\)`, correct: false },
      { text: `\\( x= \\pm 3 \\)`, correct: false },
    ],
  },
  {
    question: `Please solve the following equation. <br><br> \\( 3x^2+20=74 \\)`,
    answers: [
      { text: `\\( x=\\pm \\sqrt{18} \\)`, correct: false },
      { text: `\\( x=\\pm 3\\sqrt{2} \\)`, correct: true },
      { text: `\\( x=\\pm 9 \\)`, correct: false },
      { text: `\\( x=\\pm \\sqrt{17} \\)`, correct: false },
    ],
  },
  {
    question: `Please solve the following equation. <br><br> \\( x^2 + 14x +48 = 0 \\)`,
    answers: [
      { text: `\\( x=-4,-12 \\)`, correct: false },
      { text: `\\( x=3,16 \\)`, correct: false },
      { text: `\\( x=6,8 \\)`, correct: false },
      { text: `\\( x=-6,-8 \\)`, correct: true },
    ],
  },
  {
    question: `Please solve the following equation. <br><br> \\( 4x^2 + 12x +9 = 0 \\)`,
    answers: [
      { text: `\\( x=-\\dfrac{2}{3} \\)`, correct: false },
      { text: `\\( x=\\dfrac{3}{2} \\)`, correct: false },
      { text: `\\( x=-\\dfrac{3}{2} \\)`, correct: true },
      { text: `\\( x=\\pm 3 \\)`, correct: false },
    ],
  },
  {
    question: `Please solve the following equation. <br><br> \\( x^2-36=-5x \\)`,
    answers: [
      { text: `\\( x=-4,9 \\)`, correct: false },
      { text: `\\( x=4,-9 \\)`, correct: true },
      { text: `\\( x=-8,4 \\)`, correct: false },
      { text: `\\( x=\\pm 6 \\)`, correct: false },
    ],
  },
  {
    question: `Please solve the following equation. <br><br> \\( 3x^2=18x \\)`,
    answers: [
      { text: `\\( x=\\pm 6 \\)`, correct: false },
      { text: `\\( x=6 \\)`, correct: false },
      { text: `\\( x=0,6 \\)`, correct: true },
      { text: `\\( x=2 \\)`, correct: false },
    ],
  },
  {
    question: `Please solve the following equation. <br><br> \\( 5x^2+3x-8=0 \\)`,
    answers: [
      { text: `\\( x= 1, -\\dfrac{8}{5} \\)`, correct: true },
      { text: `\\( x=\\dfrac{-3\\pm\\sqrt{169}}{10} \\)`, correct: false },
      { text: `\\( x=-1,\\dfrac{2}{5} \\)`, correct: false },
      { text: `\\( x=1,-\\dfrac{16}{10} \\)`, correct: false },
    ],
  },
  {
    question: `Please solve the following equation. <br><br> \\( 2x^2-7x+4 =0 \\)`,
    answers: [
      { text: `\\( x= \\dfrac{7\\pm\\sqrt{17}}{2} \\)`, correct: false },
      { text: `\\( x= \\dfrac{-7\\pm\\sqrt{17}}{4} \\)`, correct: false },
      { text: `\\( x= \\dfrac{7\\pm\\sqrt{17}}{4} \\)`, correct: true },
      { text: `\\( x= 2,4 \\)`, correct: false },
    ],
  },
  {
    question: `Please solve the following equation. <br><br> \\( 2x^2-3x-1 =0 \\)`,
    answers: [
      { text: `\\( x= \\dfrac{3\\pm 3\\sqrt{2}}{4} \\)`, correct: false },
      { text: `\\( x= 1,\\dfrac{1}{2} \\)`, correct: false },
      { text: `\\( x= -1,\\dfrac{3}{2} \\)`, correct: false },
      { text: `\\( x= \\dfrac{3\\pm \\sqrt{17}}{4} \\)`, correct: true },
    ],
  },
  {
    question: `Please solve the following equation. <br><br> \\( 4x^2+8x+3 =0 \\)`,
    answers: [
      { text: `\\( x= 2,4 \\)`, correct: false },
      { text: `\\( x= -\\dfrac{3}{2}, -\\dfrac{1}{2} \\)`, correct: true },
      { text: `\\( x= \\dfrac{-8\\pm 3\\sqrt{3}}{8} \\)`, correct: false },
      { text: `\\( x= -3, -\\dfrac{1}{4} \\)`, correct: false },
    ],
  },
];

/* ------------------------------------------------------------ */

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  showQuestion();
  MathJax.typesetPromise();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  MathJax.typesetPromise();

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    MathJax.typesetPromise();
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
