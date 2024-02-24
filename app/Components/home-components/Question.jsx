"use client";
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Heading from '../mini-components/Heading';

export default function Question() {
  return (
    <div className='md:w-full flex  items-center justify-center flex-col text-center w-11/12'>
    <Heading title={"Frequently asked question"}/>
      <Accordion defaultActiveKey="0" className='w-[78%] mt-10 mb-20'>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='font-bold'>How do I create a new blog post on Digiblog?</Accordion.Header>
        <Accordion.Body>
        Creating a new blog post on Digiblog is easy! Simply log in to your account, navigate to the dashboard, and click on the New Post button. From there, you can enter your title, write your content using our intuitive editor, add images, and then hit the publish button when you're ready to share it with the world.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='font-bold'>Can I customize the look and feel of my blog on Digiblog?</Accordion.Header>
        <Accordion.Body>
        Absolutely! Digiblog offers a range of customization options to help you personalize your blog to suit your style. You can choose from different themes, customize colors, fonts, and layouts, and even add your own logo and branding elements to make your blog truly unique.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='font-bold'>Is Digiblog mobile-friendly?</Accordion.Header>
        <Accordion.Body>
        Yes, Digiblog is fully optimized for mobile devices, ensuring that your blog looks great and functions smoothly on smartphones and tablets. Whether you are writing a new post, managing comments, or checking your blog  stats, you can do it all from the palm of your hand, no matter where you are.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className='font-bold'>How can I grow my audience on Digiblog?</Accordion.Header>
        <Accordion.Body>
        Building an audience for your blog on Digiblog is all about creating high-quality content and engaging with your readers. Share your posts on social media, interact with other bloggers in your niche, and encourage readers to subscribe to your blog to stay updated on your latest posts. Consistency is key, so keep publishing great content and interacting with your audience to steadily grow your following over time.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion></div>
  )
}
