import articlesData from '../data/articlesData'

export default function getArticles(num, defNum = 4) {
    const maxNum = articlesData.length
    const articleArray = []
    const tempArray = new Array(num || defNum).fill("").forEach(getRandomArticle)
    
    function getRandomArticle() {
      const randomArticle = articlesData[Math.floor(Math.random() * maxNum)]
      let duplicateDetected = false
      articleArray.forEach(article => {
        if (article.id === randomArticle.id){
          duplicateDetected = true
          }  })
        if (duplicateDetected) {
          getRandomArticle()
        } else {
          articleArray.push(randomArticle)
        }
    }
    
    return articleArray
    
  }
  