---
layout: docs
title: DRAFT* - Using the Reminded Not Booked Tiles
---

<a name="top"></a>

# We are still working on this article!
We are currently reviewing this article before it is published, check back later.

# Using the Reminded Not Booked Tiles
The primary goal of sending reminders to customers is to prompt them to book the service they were notified about. However, in some cases, the customer may not book as expected and require further follow-up. This is where the **Reminded Not Booked** feature is useful. It creates a list within the system to help you keep track of which customers need follow-up action regarding their booking.

## In this article
1. [Reminded Not Booked Set Up](#reminded-not-booked-set-up)
2. [Reviewing Reminded Not Booked Tiles](#reviewing-reminded-not-booked-tiles)

### Reminded Not Booked Set Up
This setup can be only be done by a **System Admin**. To Setup the **Reminded Not Booked** Setup:
1. In the top right corner, choose the ![](media/search_icon.png) icon, enter **Reminded Not Booked Setup**, and select the related link.

   ![](media/garagehive-reminded-not-booked-setup1.png)

2. In the **Reminded Not Booked Setup** page, the **Reminder Type's** listed are dependent on **Vehicle Reminder Dates** type customer notifications being enabled in the system. To learn more on how to setup the **Vehicle Date Reminders**, click [here](/docs/garagehive-vehicle-date-reminders.html){:target="_blank"}.
3. The **maximum number of days until the due date** will be automatically filled to 30 days, but you can adjust it if necessary. 
4. In the **Check reminders sent within the last No. of days** field, the days will be automatically be added as 7 days but you can specify the number of days you would like to receive a **Reminded Not Booked** notification after the initial reminder has been sent.

   ![](media/garagehive-reminded-not-booked-setup2.png)

5. Then, in the **General** FastTab, you have the option to choose the **Vehicle Data Update Method** for when the **Reminded Not Booked** notification is sent.
   - **None**: No vehicle data updates will occur when this option is selected.
   - **Update MOT**: MOT data for applicable vehicles will be updated. Standard lookup charges will apply.
   - **Update MOT & Vehicle Data by VIN**: All vehicle data for applicable vehicles will be updated using the vehicle VIN. Standard lookup charges will apply. 

      ![](media/garagehive-reminded-not-booked-setup3.png)

6. Once you've completed the setup, click the **Enabled** slider to enable the setup in the system.

   ![](media/garagehive-reminded-not-booked-setup4.png)


[Go back to top](#top)

### Reviewing Reminded Not Booked Tiles
1. When the **Reminded Not Booked Setup** is enabled, you'll see the following tiles under the **Reminded Not Booked** heading in your Role Centre.

   ![](media/garagehive-reminded-not-booked-tiles1.png)

   {% include tip.html title="Note" text="The tiles can be personalised out not to appear in the Role Centre. Read more about personalisation in the documentation." %}

2. In the **New** tile, you'll find the list of vehicles which match the **Reminded Not Booked Setup**. This list will be regenerated once per day (overnight).
3. Click on the **New** tile to view the list.
4. From the menu bar, there are several actions to use. When you click on the **Suggest Lines**, it reruns the report, and generates a new list.

   ![](media/garagehive-reminded-not-booked-tiles2.png)

5. To create a new document for the customer, click on the **Create Document** action. You can choose to create an **Estimate** or a **Jobsheet**.

   ![](media/garagehive-reminded-not-booked-tiles3.png)

6. To move the line to the **In Process** tile or mark it as closed, select **Process** and choose either **Set In Process**, or **Mark as Closed**.

   ![](media/garagehive-reminded-not-booked-tiles4.png)

7. To send an Email or SMS to the customer, select **Create Interaction** and choose **Send Email** to send an email or **Send SMS** to send an SMS to the customer. To learn more on how to use the emailing feature, click [here](/docs/garagehive-using-emailing-feature.html#using-the-emailing-feature){:target="_blank"}.

   ![](media/garagehive-reminded-not-booked-tiles5.png)

8. To add a comment about the line, select an appropriate **Reason Code** and write the comment in the **Comment** column.

   ![](media/garagehive-reminded-not-booked-tiles6.png)


[Go back to top](#top)

