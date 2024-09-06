---
layout: docs
title: Understanding the Jobsheet Line Checker Notifications
---

<a name="top"></a>

# Understanding the Jobsheet Line Checker Notifications
The line checker is a column available in the Jobsheet **Lines** Sub-Page that provides notifications on the **Item** or **Labour** that has been added to the Jobsheet lines. This ensures that the user is aware of any errors, warnings, or information related to the added item or labour. 

   ![](media/garagehive-line-checker.png)

In this article, we will look at what they actually mean and the implications of posting the document:

   | Icon | Description                                                                                                                                                                                                          | Implication to Posting Jobsheet            |
   | :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------- |
   | 🚩    | The red flag icon appears when: <br> 1. Item stock levels are insufficient. <br> 2. Labour line resource information is missing. <br> 3. The slider **Prevent Posting if Unit Price is Less than Cost** is enabled*. | Prevents document from posting.            |
   | ⚠️    | The triangle warning icon appears when the **Unit Price of Labour** in a line is less than or equal to zero.                                                                                                         | Doesn't prevent the document from posting. |
   | ⚠️    | The triangle warning icon appears when: <br> **1**. The **Unit Price of an Item** is less than or equal to the Unit Cost. <br> **2**. An item appears in more than one document lines.                               | Doesn't prevent the document from posting. |
   | 🔁    | The Anticlockwise Downwards and Upwards Open Circle Arrows icon appears when there is a substitution available in the system for the item.                                                                           | Doesn't prevent the document from posting. |
   | ℹ️    | The information icon, appears when there is more than one information available to display.                                                                                                                          | Doesn't prevent the document from posting. |
   | 📦    | The package icon appears when the parts ordered from the Jobsheet have been received in the system.                                                                                                                  | Doesn't prevent the document from posting. |


[Go back to top](#top)


### Setting The Flag Warning when the Unit Price is Less than Unit Cost*
When the flag warning is set for when the Unit Price is less than the Unit Cost, this prevents the document from posting. To set it:
1. In the top right corner, choose the ![](media/search_icon.png) icon, enter **Service Mgt. Setup GH**, and select the related link.

   ![](media/garagehive-line-checker-unit-price-vs-unit-cost1.png)

2. Under **General** FastTab, enable the **Prevent Posting if Unit Price is Less than Cost** slider.

   ![](media/garagehive-line-checker-unit-price-vs-unit-cost2.png)

3. To enable the same for **Sales Quote** and **Sales Order**, choose the ![](media/search_icon.png) icon, enter **sales & receivables setup**, and select the related link.

   ![](media/garagehive-line-checker-unit-price-vs-unit-cost3.png)

4. Enable the **Prevent Posting if Unit Price is Less than Cost** slider.

   ![](media/garagehive-line-checker-unit-price-vs-unit-cost4.png)


[Go back to top](#top)

### Line Checker in Technician Jobsheet
The **Technician Jobsheet** allows the technician to see notification about Item Unavailability as well as whether a substitute for the item exists. The following is how the notification appears and what the technician should do to view it:
1. If a line has a notification in the line checker, the icon appears in the **Show Document Lines** action, and when clicked, it displays the lines with the notification in italic and bold for the **Item No.**, as shown below.

   ![](media/garagehive-line-checker-technician1.png)

2. When the technician selects the line with the italic and bold Item No., they will now see the icon notification on the **Check** field. The technician needs to click on the icon to find out what the notification is about.

   ![](media/garagehive-line-checker-technician2.png)


[Go back to top](#top)
