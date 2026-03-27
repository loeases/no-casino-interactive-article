**No Casino in Flushing | Interactive Article**

My goal for this project was to create a visual journalistic article, in the style of “scrollytelling,” to convey the perspective of the No Casino in Flushing Meadows Corona Park protestors. Pressed for time and limited in coding ability, I wanted to first establish the basic visual style, including the image and text formatting, as well as the color scheme and fonts.

**Wire Framing**

Drawing inspiration from interactive articles on The New York Times, and the Philadelphia Inquirer, and The Pudding, I designed a wireframe for desktop and mobile devices.

In order to emphasize the liveliness of Flushing, I wanted the article’s photos to pop. Thus, I decided on a minimalistic, mostly black theme to contrast with the photos. Text would be contained within gray boxes to stand out against the dark background, in order to account for visual accessibility. 

**Coding**

I borrowed code from a class demonstration on responsiveness so that the article would be accessible in a desktop and mobile format, creating different breakpoints for each.

In order to establish a consistent visual style, I imported two fonts from Google Fonts: a title font (Aldrich) and a general font for the entire article (DM Sans). Fonts were selected for their resemblance to those used by the aforementioned news outlets.

The article’s cover image was created with a position: relative; image container, with { width: 100%; } in order for the photo to stay affixed in its position without interference of other elements, within the bounds of any sized screen. I then created a container for the title box with an absolute position in order for it to lay on top of the cover image, and filled it with a background color. Underneath the title box, I created a div for the “Scroll to Continue” directive and a downward carrot to accompany it. I googled CSS flashing animations in order to create movement within the downward arrow.

Based on the content we’ve learned in class, I decided to use grids in order to place the photos and the text side-by-side. I created a div class for all article sections. This was incredibly challenging for me.

In the desktop version, each section of the article (one photo and one textbox pairing) would be contained within one grid, with two columns — the column on the left, containing the photo, was twice the fractional rate of that of the textbox. Because of the different sizes of the photo and the textbox, the textbox was centered vertically next to the photo. However, sizing all photos at { width: 100%; } posed a problem, because vertical photos would take up an overwhelming amount of space. To fix this, I used a :not() pseudoclass to only select horizontal photos, and sized vertical photos with custom widths.

This grid format did not work in the mobile version. Thus, instead of having two columns, I formatted the article to only consist of one column and row, so that the format would first show a photo, then text, then a photo, then text, etc, in order.

To create space between sections and increase accessibility, I used a flexbox to create a gap between each section.

# no-casino-interactive-article
