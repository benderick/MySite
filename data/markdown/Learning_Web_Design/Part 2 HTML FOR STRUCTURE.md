# 4. Creating A Simple Page
### IN THIS CHAPTER
An introduction to elements and attributes 
Marking up a simple web page 
The elements that provide document structure 
Troubleshooting broken web pages
• Get a feel for how markup works, including an understanding of elements  
and attributes.  
• See how browsers interpret HTML documents.  
• Learn how HTML documents are structured.  
• Get a first glimpse of a style sheet in action.

### A WEB PAGE, STEP-BY-STEP
The demonstration in this chapter has five steps that cover the basics of page production:
- Step 1: Start with content. 
As a starting point, we’ll write up raw text content and see what browsers do with it.
- Step 2: Give the document structure. 
You’ll learn about HTML element syntax and the elements that set up areas for content and metadata.
- Step 3: Identify text elements. 
You’ll describe the content using the appropriate text elements and learn about the proper way to use HTML.
- Step 4: Add an image. 
By adding an image to the page, you’ll learn about attributes and empty elements.
- Step 5: Change how the text looks with a style sheet. 
This exercise gives you a taste of formatting content with Cascading Style Sheets.

### Launch a Text Editor
nothing

### Step 1: Start with Content
#### The page
Our page isn’t looking so good. The text is all run together into one block—that’s not how it looked when we typed it into the original document.
![](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/fd3a737b936728cde1e46e21adc780146426733d.png)

![](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/93cc30aea295d41b7c5bc12a8ad075eed1a20944.png)

#### Learning from Step 1
   There are a couple of lessons to be learned here. 
   - The first thing is that the browser ignores some content in the source document. 
   - Second, we see that simply typing in some content and naming the document .html is not enough. While (尽管)the browser can display the text from the file, we haven’t indicated the structure of the content. That’s where HTML comes in.
We’ll use markup to add structure: first to the HTML document itself , then to the page’s content. Once the browser knows the structure of the content, it can display the page in a more meaningful way.
<!--ID: 1661230932417-->


#### Files Naming Conventions
不要空格、不要特殊字符、使用小写字母、自我约定

#### What Browsers Ignore
The following information in the source document will be ignored when it is viewed in a browser:
- Multiple-character (white) spaces 
	- When a browser encounters more than one consecutive blank character space, it displays a single space. 
- Line breaks (carriage returns)
	- Browsers convert carriage returns to white spaces, so following the earlier “ignore multiple white spaces” rule, line breaks have no effect on formatting the page.
- Tabs 
	- Tabs are also converted to character spaces, so guess what? They’re useless for indenting text on the web page (although they may make your code more readable).
- Unrecognized markup 
	- Browsers are instructed to ignore any tag they don’t understand or that was specified incorrectly.
	- Depending on the element and the browser, this can have varied results. The browser may display nothing at all, or it may display the contents of the tag as though(好像) it were normal text.
- Text in comments 
	- Browsers do not display text between the special `<!-- and -->` tags used to denote a comment.
	<!--ID: 1661230932423-->

