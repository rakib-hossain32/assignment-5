### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

Answer ----->
1. getElementById হলো নির্দিষ্ট id এর প্রথম Element টা নিয়ে আসে । id সবসময় একটাই হয়। getElementsByClassName হলো নির্দিষ্ট class এর সব Element কে নিয়ে আসে। এটি Live HTML Collection দেয় । যা দেখতে Array এর মতো কিন্তু পুরোপুরি array না । querySelector হলো css selector যা নির্দিষ্ট id বা class এর প্রথম Element টা নিয়ে আসে। querySelectorAll হলো css selector এই কিন্তু এটি সব Element নিয়ে আসে এবং একটি Node List দেয়। 

2. প্রথমে createElement দিয়ে যেকোন একটা HTML Tag Create করতে হবে তার সেই Tag এর সাথে .innerText বা .innerHTML দিয়ে, = (সমান) এবং ("") চিহ্ন দিয়ে যা লেখতে চাই তা দিতে হবে । এবং DOM এ যুক্ত করার জন্যে .appendChild() দিয়ে ()এইটা মধ্যে ওই Tag এর  নাম দিতে হবে। 

3. Event Bubbling মানে হলো যখন কোনো child element এ event ঘটে তখন সেই element এ কাজ করে, তারপরে এক এক করে তার parent তার parent এই ভাবে উপরের element এ চলে যায় । এইটা কাজ করে হইলো, প্রথমে child element এ event ট্রিগার হয়, তারপর তার parent এ চলে যায় তারপর তার parent এর কাছে যায় এইভাবে body পর্যন্ত যায়।

4. Event Delegation হলো,যেখানে আমরা কোনো parent element এ event listener বসাই এবং সেই parent এর ভিতরে child element গুলার  event কেও listener দিয়ে হ্যান্ডলে করি । child element এর জন্য আলাদা listener বসাতে হয় না । DOM এ নতুন element যোগ করলেও listener দিয়ে event  ধরা যায়। এবং প্রতিটা element এ আলাদা আলাদা event listener দেওয়া লাগে না ।

5. preventDefault() হলো action বন্ধ করে দেয়, অর্থাৎ event এর default hehavior বন্ধ করে দেয়। stopPropagation() হলো event bubbling বন্ধ করে দেয় । যেমনঃ যখন আমরা child element এ ক্লিক করবো তখন সে আর parent element এর কাছে যেতে পারবে না।