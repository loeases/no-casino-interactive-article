**Who Decides Flushing's Future? | Interactive Article**

My goal for this project was to create a visual journalistic article, in the style of “scrollytelling,” to explore the forces behind the incoming casino in Flushing Meadows Corona Park -- and more specifically, what they mean for the shifting Flushing community.

**Background**

My initial goal was to examine the protest efforts behind the No Casino in Flushing Meadows Corona Park movement. However, after speaking to some of the involved parties, I realized that much of the pertinent information was not appropriate to share with a public audience. So, after thinking it over, I decided to attempt a more big-picture analysis of what the casino means for Flushing. (Note: I do not mean to downplay the impact of the casino on Corona side folks, but I am more familiar with the protests based out of Flushing.)

Much of my time was taken up by research. I spoke the most with J.H., one of the lead protestors, V.L., a social science researcher who has written about the incoming casino, and a former member of the legal strategy team. 

To my surprise, one of the hardest parts of the assignment was trying to map out where each photo would line up with an accompanying chunk of text, which parts of the text to animate and which to trigger later, how the mapping would help with narrative flow, etc.

**Coding**

I made some edits to the original draft based on suggestions (fix responsiveness issues and layering issues -- using "px" instead of "rem" for margin/padding measurements in each media query and z-index, as well as link features (<a href="www.link.com" target="_blank" rel="noopener noreferrer"></a>)).

When adding 3 Javascript functionalities, I decided to add a loading page, a scrollytelling animation (involving a snap triggered by scrolling until the image reached 1/2 vh on the screen), and a progress bar at the bottom of the screen. However, I ended up removing these features because one, I felt that the loading page was unneccessary for the content, and two, the scrollytelling animation was extremely jittery. Below, you will find some of the code that I used.


    ```Javascript 
    const bylineMain = document.querySelector(".byline-main");
    const bylineSub = document.querySelector(".byline-sub");
    const coverImage = document.getElementById("flushing-cover-photo");

    document.body.classList.add("loading");

    // initial loading text
    bylineMain.textContent = "Loading";
    bylineSub.textContent = "";

    // loading dots animation
    let dotCount = 0;
    const dotInterval = setInterval(() => {
    dotCount = (dotCount + 1) % 4;
    bylineMain.textContent = "Loading" + ".".repeat(dotCount);
    }, 400);

    let pageReady = false;
    let minTimePassed = false;

    function tryUnlock() {
    if (pageReady && minTimePassed) {
        clearInterval(dotInterval);

        document.body.classList.remove("loading");

        bylineMain.textContent = "By Louise Liu";
        bylineSub.textContent = "Published May 2026";
    }
    }

    // minimum 3 seconds
    setTimeout(() => {
    minTimePassed = true;
    tryUnlock();
    }, 3000);
    ```

Instead of using the loading screen, I decided to try a different approach. Because the screen would load weird (often starting in the middle of the page rather than the top), I reduced the resolution of my cover image, as well as tried to use Javascript to create a JS fadeInImage function that would only reveal the hero image if the photo actually finished loaded (using If / Else). I also used CSS to add a fade-in animation for other aspects of the cover screen so the loading would not feel so harsh.

**Scrollytelling Difficulties**

I spent the most amount of time trying to solve this problem but do not think I succeeded.

At first, I used an AI assistance to create the foundation of a scrollytelling animation that would allow each <div class="body-flex"> to snap to 1/2 vh upon being triggered by trolling. Even after editing it as best as I could, the animation was extremely jittery (you'll find the code below).

    ```Javascript
    const sections = document.querySelectorAll(".body-grid");

    function revealOnScroll() {
    const trigger = window.innerHeight * 0.5;

    let activeIndex = -1;

    sections.forEach((section, i) => {
        const top = section.getBoundingClientRect().top;

        if (top < trigger && top > -window.innerHeight * 0.5) {
        activeIndex = i;
        }
    });

    sections.forEach((section, i) => {
        if (i === activeIndex) {
        section.classList.add("active");
        } else {
        section.classList.remove("active");
        }
    });
    }

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);
    ```
Afterwards, I tried to create a "text-loading" div class for the text I wanted to show up first, and another "text-loading1", "text-loading2", etc div classes for text to be triggered by scrolling, but accompanying the same image as the first text. In CSS I set the "text-loading" opacity to 0, and then in Javascript I tried to create a function that would remove the "text-loading" class. I struggled to have the different classes be sequentially triggered.

I tried to use InteractionObserver in Javascript but was once again stumped when it came to trying to separate the two flexboxes (the text side and the photo side) and having different text show up sequentially while the photo remained the same.

I tried to use AI assistance to edit my code and generate new code and none of it worked. 

Ultimately, I imitated a sort of two-sided effect using a flexbox with position: sticky, where the image would stay consistent as the text continued to scroll. However, this is not an effect I love -- I think I would rather the photos stay stationary and I place the text around it / have the photos be centered in the same column between textboxes.

Because I felt that the flexbox CSS "animations" (as made with the sticky boxes) looked odd next to completed static text, I decided to attempt another aspect of many scrollytelling pieces -- a sort of snapping effect of each section to be focused on. I created the ".flex-fade-in" class and used InteractionObserver to add the class ".active" when the reader scrolls to the proper section. Then in CSS, I set ".flex-fade-in: to opacity=0 as a starting point. I used transform: translateY(40px); to shift the flexbox slightly vertically when the ".active" class was added to the element (as well as re-adding opacity=1).

**Visual/Accessibility Edits**

Because the article was so-text-heavy, I made a few different edits for greater visual access.

I demarcated different sections to break up the text using a dot animation that I found on the internet.

To emphasize key points, I used AI assistance to create a text-highlighting effect in Javascript, using InteractionObserver to trigger the "highlighting" effect of a growing background box under the text.

Because I felt that the flexbox CSS "animations" (as made with the sticky boxes) looked odd next to completed static text, I decided to attempt another aspect of many scrollytelling pieces -- a sort of snapping effect of each section to be focused on. I created the ".flex-fade-in" class and used InteractionObserver to add the class ".active" when the reader scrolls to the proper section. Then in CSS, I set ".flex-fade-in: to opacity=0 as a starting point. I used transform: translateY(40px); to shift the flexbox slightly vertically when the ".active" class was added to the element (as well as readding opacity=1).

Overall, I attempted to edit the entire piece for visual accessibility and aesthetics as best as I could. 

**Future Considerations**

If I were to continue editing this project, I would probably work on refining the writing so that it works with the medium to get the key points across. I would also consider how to better integrate photos and audio in a way that actually compliments the article rather than just for being there.

I would also add captions to the photos and try to adjust the moving effect of the photos so that it looks a little smoother and purposeful. 

It might also be interesting to add additional interactions -- perhaps another page you can click to learn more about the project or how to get more involved.

# no-casino-interactive-article
