---
layout: docs
title: Setting Up Online Documents
---

# Setting Up Online Documents 
To enable the online documents in your system, you must first contact the Garage Hive Support team so that the service can be enabled. In this article, we'll go over the steps to take after the service has been activated in your system.

## In this article

1. [Online documents set up](#online-documents-set-up)
2. [Customer notification set up](#customer-notification-set-up)

### Online documents set up
If your system already has the service activated, the following steps will help you to fully configure the online documents:

1. in the top-right corner, choose the ![](media/search_icon.png) icon, enter **Online Documents Setup**  and select the related link.

   ![](media/garagehive-online-documents-setup1.gif)

2. Make sure the **Enabled** slider is turned on.
3. Set the **Valid Hours** for online documents, which is the number of hours the previewed or published online document lasts before expiring.
4. Set the **Service Comment Line Type** field to **Online Doc**. This field specifies the internal notification that the online document will use; for example, when a customer approves the document, the system indicates the communication as a comment from the selected **Code** in the field.

   ![](media/garagehive-online-documents-setup2.gif)

5. To avoid having a VI **Download PDF** option when publishing the Vehicle Inspection Estimate, as shown below...

   ![](media/garagehive-online-documents-setup2.1.gif)

   Enable the **Skip VIE Related VI Publish** slider.

   ![](media/garagehive-online-documents-setup2.2.gif)

6. Add an introduction text in the field **Job Auth Intro Text** from the FastTab titled **Default Texts**. This is the text that appears at the top of the online document that has been previewed or published. You can use the **Field Tags** to automatically insert a particular field in the text.

   ![](media/garagehive-online-documents-setup3.gif)

7. Add the footer text in the next field, **Job Auth Footer Text**. This is the text that appears after the report in the online document.

   ![](media/garagehive-online-documents-setup4.gif)

<br>

### Customer notification set up
The customer notification setup allows you to specify how the customer will receive the online documents link, when and after how long, and the message body. The following are the steps to take for the setup:

1. From the ![](media/search_icon.png) icon, at the top-right corner, search for **Customer Notifications** and select it from the search results.
2. From the window that opens, choose **Online Job Auth**.

   ![](media/garagehive-online-documents-setup5.gif)

3. Under the **General** section, you can set the **Date Formula** to **-1D** (-1 Day) to ensure that the system sends the link to the customer immediately.

   ![](media/garagehive-online-documents-setup6.gif)

4. Add the message body to both the **SMS** and the **Email** sections, using the provided field tags to add a specific field in the message body.

   ![](media/garagehive-online-documents-setup7.gif)

5. Select the slider next to the Send SMS and Send Email fields to enable sending **SMS** and **Email**. A pop-up window will appear, allowing you to select a default document to preview the messages.

   ![](media/garagehive-online-documents-setup8.gif)

6. Under the **Recurrence** section, select the days on which you want the system to send the notification, and enable the customer notification under the **General** section.

   ![](media/garagehive-online-documents-setup9.gif)

After you have completed this setup, you are now ready to use the online document feature.

<br>

### **See Also**

[Introduction to Online Documents](garagehive-online-documents-introduction.html){:target="_blank"} \
[Grouping document lines](garagehive-group-items-grouping-document-lines.html){:target="_blank"} \
[Working with group items actions](garagehive-group-items-working-with-group-items-actions.html){:target="_blank"} \
[Previewing and publishing online documents](garagehive-online-documents-previewing-and-publishing-online-documents.html){:target="_blank"} \
[Adding and Managing Media in Garage Hive](garagehive-online-documents-adding-and-managing-media.html){:target="_blank"} \
[Using online documents in estimates, checklists and vehicle inspection estimates](garagehive-online-documents-using-online-documents-in-estimates-checklists-and-vehicle-inspection-estimates.html){:target="_blank"} \
[What Happens When a Customer Acts on a Sent Online Document?](garagehive-online-documents-what-happens-for-customers-actions.html){:target="_blank"}
