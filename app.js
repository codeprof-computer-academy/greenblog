// year logic
document.querySelector(".year").innerHTML = new Date().getFullYear()


// logic to change theme

let dark_theme = false;



// change theme function
function change_theme(){
     
     // change the dark_theme to true
     dark_theme = !dark_theme

     //  target the theme ball
     document.querySelector(".theme-ball").classList.toggle("theme-slider")

     document.querySelector('body').classList.toggle("dark-theme-body")
     document.querySelector('header').classList.toggle("dark-theme-header")
     document.querySelector('main').classList.toggle("dark-theme-main")
     document.querySelector('section').classList.toggle("dark-theme-section")
     document.querySelector('section.all-posts').classList.toggle("dark-theme-section")
     document.querySelector('article').classList.toggle("dark-theme-section")
     document.querySelector('form').classList.toggle("dark-theme-form")
     document.querySelector('footer').classList.toggle("dark-theme-footer")

     // post card theme logic

     const all_post_card = document.querySelectorAll(".post-card")
     all_post_card.forEach(function(post_card){
              
                    post_card.classList.toggle("dark-theme-div")
                    
            
     })

}




// target the theme btn
document.querySelector(".theme-btn").addEventListener("click", change_theme)


// nav logic

// target the menu btn
const menu_btn = document.querySelector(".menu-btn")
const navbar = document.querySelector("nav")
const post_form =  document.querySelector(".post-form")

// add click event listener to it
menu_btn.addEventListener("click", function(){
       menu_btn.classList.toggle("close-menu") 
       navbar.classList.toggle("show-nav")
       
})


// logic to display the post form
const post_btn = document.querySelector(".post-btn")

// add click event listener to it
post_btn.addEventListener("click", function(){
        // target the post form and display it
       post_form.style.display = "flex"
})


// logic to close the post form
document.querySelector(".close-form").addEventListener("click", function(){
      // target the post form and close it
        post_form.style.display = "none"
})


// logic to upload and preview image

// target the file input
let image_url = ""
const file_input = document.querySelector("#uploaded_file")
file_input.addEventListener("change", function(){
          let selected_image = file_input.files[0]
        //   convert the selected image to object url
      image_url =   URL.createObjectURL(selected_image)

      document.querySelector(".image-preview").src = image_url
})

// add event listener of change to it

// logic to add post and display post

post_form.addEventListener("submit", function(event){
    //  prevent default behavior of form reloading the page
    event.preventDefault()

    // validation starts here
 
  // grab username
  let username = document.querySelector(".username-input").value
  // grab the title
  let title = document.querySelector(".title-input").value

  // grab the post body
  let post_body = document.querySelector(".body-text").value

 // check if user enters username
 if(username === ""){
      alert("Ooops! pls enter your username before posting")
 }else{
       if(title === ""){
          alert("Ooops! pls enter the title of your post ")
       }else{
             if(post_body === ""){
                alert("Ooops! pls enter the body of your post")
             }else{
                   if(document.querySelector("#uploaded_file").value === ""){
                        alert("Ooops! upload an image for your post")
                   }else{

                       let post = ""
                         if(dark_theme){
                               // post your post here
                            post = `<div class="post-card dark-theme-div">
                        <img src=${image_url} alt="" class="post-image" width="100">
                        <p>
                            <b>${title}</b>
                            <span>
                                  ${post_body}
                            </span>
                            <button>See more...</button>
                           <small class="username-date">
                                <i class="username">
                                   ${username}
                                </i>

                                <i class="date">
                                     ${new Date().toLocaleString()}
                                </i>
                           </small>

                           <small class="social-widgets">
                                 <span>
                                      <img src="./images/like.png" alt="" width="15"><small>25</small>
                                 </span>

                                <span>
                                    <img src="./images/love.png" alt="" width="15"><small>10</small>
                                </span>

                                <span>
                                    <img src="./images/comment.png" alt="" width="15"><small>12</small>
                                </span>

                                <span>
                                    <img src="./images/share.png" alt="" width="15"><small>50</small>
                                </span>
                                
                           </small>
                        
                        </p>

                    </div>
`
                         }else{
                               // post your post here
                           post = `<div class="post-card">
                        <img src=${image_url} alt="" class="post-image" width="100">
                        <p>
                            <b>${title}</b>
                            <span>
                                  ${post_body}
                            </span>
                            <button>See more...</button>
                           <small class="username-date">
                                <i class="username">
                                   ${username}
                                </i>

                                <i class="date">
                                     ${new Date().toLocaleString()}
                                </i>
                           </small>

                           <small class="social-widgets">
                                 <span>
                                      <img src="./images/like.png" alt="" width="15"><small>25</small>
                                 </span>

                                <span>
                                    <img src="./images/love.png" alt="" width="15"><small>10</small>
                                </span>

                                <span>
                                    <img src="./images/comment.png" alt="" width="15"><small>12</small>
                                </span>

                                <span>
                                    <img src="./images/share.png" alt="" width="15"><small>50</small>
                                </span>
                                
                           </small>
                        
                        </p>

                    </div>
`
                         }

  
    document.querySelector(".posts-container").innerHTML += post
    
   
                   }
             }
       }
 }

     post_form.style.display = "none"

})