// your code here!
$(function () {
  const $form = $('.js-text-form')
  const $formInput = $('.js-text-input')
  const $words = $('.js-word-count')
  const $uniqueWords = $('.js-unique-word-count')
  const $avgWordLength = $('.js-avg-word-length')
  const $results = $('.js-results')

  $form.submit(function (e) {
    e.preventDefault()

    const words = $formInput.val()
      .toLowerCase()
      .replace(/(\r\n|\n|\r)/gm," ")
      .split(/[ ,!.";:-]+/g)
      .filter(Boolean)
    
    const {
      count,
      unique,
      avgLength
    } = analyeWords(words)
    
    $words.text(count)
    $uniqueWords.text(unique)
    $avgWordLength.text(avgLength)
    $results.removeClass('hidden')
  })

  function analyeWords (words) {
    let totalLength = 0
    let dedupedWords = []

    words.forEach((word) => {
      totalLength += word.length
      if (!dedupedWords.includes(word)) {
        dedupedWords.push(word)
      }
    })

    return {
      count: words.length,
      unique: dedupedWords.length,
      avgLength: totalLength / words.length
    }
  }
})


