var responseBodyRow = document.querySelector("#responseData")


var HttpClient = new XMLHttpRequest();

HttpClient.open("get","https://newsapi.org/v2/top-headlines?country=us&apiKey=3296811c25c0413a875376b605a48a31")
HttpClient.send()
console.log(HttpClient.response)
var responseBody = {}
var articles = []


// Ana 3ayz awl 5abr dah ykon fe object gwa al main
// 3ayz al 4 a5bar ale b3do yt7to ta7t al main
// fel recent news a3rd ba2e al a5bar

// rows ale shayla al content (Parents)
var mainArticle = document.querySelector("#mainArticle")
var subMainArticles = document.querySelector("#subMainArticles")
var recentNewsContainer = document.querySelector("#recentNewsContainer")

HttpClient.addEventListener('readystatechange',function(){
    if(HttpClient.readyState == 4)
    {
        responseBody = (JSON.parse(HttpClient.response))
        articles = responseBody.articles
        showMainArticle()
        showSubMainArticles()
        showRecentArticles()
    }
})

// Childreen ale homa al articles

var mainArticleBody = ""
var subMainArticlesBody = ""
var recentNewsContainerBody = ""


// done
function showMainArticle(){
       mainArticleBody +=
       `
       <div class=" col-lg-9">
       <div class="binduz-er-editors-pack-thumb">
           <img src="${articles[0].urlToImage}" alt="">
       </div>
   </div>
   <div class=" col-lg-3">
       <div class="binduz-er-editors-pack-content">
           <div class="binduz-er-meta-item">
               <div class="binduz-er-meta-categories">
                   <a href="#">Technology</a>
               </div>
               <div class="binduz-er-meta-date">
                   <span><i class="fal fa-calendar-alt"></i>${articles[0].publishedAt} </span>
               </div>
           </div>
           <h4 class="binduz-er-title"><a href="#">${articles[0].title}</a></h4>
           <div class="binduz-er-meta-author">
               <div class="binduz-er-author">
                   <img src="assets/images/user-2.png" alt="">
                   <span>By <span> ${articles[0].author}</span></span>
               </div>
           </div>
       </div>
   </div>
       `

       mainArticle.innerHTML = mainArticleBody
}

// done
function showSubMainArticles(){
    for (var i = 1 ; i < 5  ; i++)
    {
       subMainArticlesBody += 
                `
                <div class=" col-lg-3 col-md-6">
                <div class="binduz-er-video-post binduz-er-recently-viewed-item">
                    <div class="binduz-er-latest-news-item">
                        <div class="binduz-er-thumb">
                            <img src="${articles[i].urlToImage}" alt="">
                        </div>
                        <div class="binduz-er-content">
                            <div class="binduz-er-meta-item">
                                <div class="binduz-er-meta-categories">
                                    <a href="#">Technology</a>
                                </div>
                                <div class="binduz-er-meta-date">
                                    <span><i class="fal fa-calendar-alt"></i>${articles[i].publishedAt}</span>
                                </div>
                            </div>
                            <h5 class="binduz-er-title"><a href="#">${articles[i].title}</a></h5>
                            <div class="binduz-er-meta-author">
                                <span>By <span>${articles[i].author}</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                `
    }

    subMainArticles.innerHTML = subMainArticlesBody
}

function showRecentArticles(){
    for (var i = 5 ; i < articles.length ; i++)
    {
        recentNewsContainerBody += 
        `
        <div class="binduz-er-recent-news-item mb-20">
        <div class="binduz-er-thumb">
            <img class="newsImg" src="${articles[i].urlToImage}" alt="">
        </div>
        <div class="binduz-er-content">
            <div class="binduz-er-meta-item">
                <div class="binduz-er-meta-categories">
                    <a href="#">Technology</a>
                </div>
                <div class="binduz-er-meta-date">
                    <span><i class="fal fa-calendar-alt"></i>${articles[i].publishedAt} </span>
                </div>
            </div>
            <h5 class="binduz-er-title"><a href="#">${articles[i].title}</a></h5>
            <p>${articles[i].content}</p>
        </div>
    </div>
        `
    }

    recentNewsContainer.innerHTML = recentNewsContainerBody
}


