---
layout: docs
title: Understanding the Schedule  
---

<a name="top"></a>

# Understanding the Schedule
The service schedule is a tool predominantly used to manage your workshop. Garage Hive works by allocating time rather than Jobsheets within the schedule; this allows you to load time accurately.

## In this article
1. [Understanding the Schedule Layout](#understanding-the-schedule-layout)
2. [Understanding the Colours within the Schedule](#understanding-the-colours-within-the-schedule)
3. [Changing the Schedule View](#changing-the-schedule-view)
4. [View and Setup Time Grids and Service Hours from the Schedule](#view-and-setup-time-grids-and-service-hours-from-the-schedule)
5. [Adding Resources in the Schedule](#adding-resources-in-the-schedule)
6. [Rearranging Resources in the Schedule](#rearranging-resources-in-the-schedule)
7. [Managing Service Hours in the Schedule](#managing-service-hours-in-the-schedule)
8. [Adding Resources Calender Changes](#adding-resources-calender-changes)
9. [View the Statistics of the Schedule](#view-the-statistics-of-the-schedule)
10. [Adding a Standard Event](#adding-a-standard-event)
11. [How to Exclude Some Standard Events when Calculating Available Hours](#how-to-exclude-some-standard-events-when-calculating-available-hours)
12. [Understanding the Emojis in an Allocation](#understanding-the-emojis-in-an-allocation)
13. [How to Add Schedule Allocations Count](#how-to-add-schedule-allocations-count)
14. [Using the Search Function in the Schedule](#using-the-search-function-in-the-schedule)
15. [Adding an Allocation Type](#adding-an-allocation-type)
16. [Block Days from Booking in the Schedule](#block-days-from-booking-in-the-schedule)
17. [Putting an Allocation On Hold from the Schedule](#putting-an-allocation-on-hold-from-the-schedule)

###  Understanding the Schedule Layout
The service schedule layout is divided into the following parts:

![](media/garagehive-understanding-the-schedule-layout1.png)

1. **The menu bar:** this is where you find the different actions to use as you navigate through the schedule.
2. **The View FastTab:** this helps you to filter what to view in the schedule according to your preference.
3. **The Schedule Timeline:** this shows the day and time in the schedule. The red line in the schedule, running from top to bottom, is the current time of the day. 
4. **The Booking Slots:** this is where the allocations bookings are made and displayed. You can make multiple allocations for a single Jobsheet. The colour of the booking changes depending on the allocation status; see [Understanding the colours within the schedule](#understanding-the-colours-within-the-schedule).

    >   **Example** <br>
    >   If you are booking in a gearbox repair job, you would not be doing all of the work in one go.<br>
    >
    >    Garage Hive allows you to make multiple allocations of one job, therefore being able to accurately load your day with jobs you will actually be working on, therefore your statistics of available hours will also be accurate. 

5. **The Resources:** these are all the resources available to work. When the resource is clocked as working, the colour changes to green.

###  Understanding the Colours Within the Schedule
The schedule colours are used to help understand the different work statuses for each work schedule. The following table explains the default colours that are set up in the system. You can change the colours to your preference.
<br>

| Default Colour                                                          |      | Status                     |      | Notes                                                                                                                                                                                                                                           |
| :---------------------------------------------------------------------- | :--- | :------------------------- | :--- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](media/garagehive-understanding-the-schedule1.png) (**Light Green**) |      | **IN PROCESS**             |      | A technician is currently working on this allocation (Do not move this allocation). It is dynamic and will grow or shrink based on the technician's clockings for this allocation.                                                              |
|                                                                         |      |                            |      |
| ![](media/garagehive-understanding-the-schedule2.png) (**Blue**)        |      | **PENDING**                |      | This is an allocation that hasn't been started.                                                                                                                                                                                                 |
|                                                                         |      |                            |      |
| ![](media/garagehive-understanding-the-schedule3.png) (**Purple**)      |      | **FINISHED**               |      | A technician has clocked onto this allocation and completed their part of this job, whether that be due to requiring additional authorisation or that it is fully completed (Do not move this allocation).                                      |
|                                                                         |      |                            |      |
| ![](media/garagehive-understanding-the-schedule4.png) (**Green**)       |      | **READY**                  |      | The Jobsheet status has been manually set to **READY**, meaning the vehicle is ready for collection. The customer has been contacted and the invoice has been prepared. (Do not move this allocation)                                           |
|                                                                         |      |                            |      |
| ![](media/garagehive-understanding-the-schedule5.png) (**Grey with** 📫) |      | **POSTED**                 |      | The postbox symbol means that the Jobsheet for this allocation has been invoiced and posted to the accounts.                                                                                                                                    |
|                                                                         |      |                            |      |
| ![](media/garagehive-understanding-the-schedule6.png) (**Grey with** ✅) |      | **REALLOCATED**            |      | The vehicle is still on site and the Jobsheet is still open. A new allocation has been made for this vehicle within the schedule, turning any previous allocations grey.                                                                        |
|                                                                         |      |                            |      |
| ![](media/garagehive-understanding-the-schedule9.png) (**Red**)         |      | **ON HOLD**                |      | A paused allocation can be moved on the schedule during the same day for a technician to resume this job. If it gets to the end of the day and there are still paused allocations, deallocate these and make a new allocation for the next day. |
|                                                                         |      |                            |      |
| ![](media/garagehive-understanding-the-schedule7.png) (**Pink**)        |      | **AWAITING AUTHORISATION** |      | You are waiting for authorisation from either the customer/ lease/ fleet company (You have to manually change the work status code to awaiting authorisation)                                                                                   |
|                                                                         |      |                            |      |
| ![](media/garagehive-understanding-the-schedule8.png) (**Brown**)       |      | **AWAITING PARTS**         |      | Parts have been ordered and you are waiting for them to arrive before reallocating. (You have to manually change the work status code to awaiting parts)                                                                                        |


[Go back to top](#top)

### Changing the Schedule View
The schedule can be customised to your liking; for example, you can reduce the number of hours shown in the schedule, and so on. Here's how to change the schedule's view:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Schedule Views** and select the related link.

   ![](media/garagehive-schedule-views1.png)

2. Select **Edit List** enable the edit mode.

   ![](media/garagehive-schedule-views2.png)

3. The following options are available for edit:
   - **Period Type** - This is the length of time shown in the schedule view, could be a day, week or month.
   - **Start Date Formula** - This is the formula for calculating the day that will be used in the schedule view when it is opened; for example, 0D indicates that the schedule view will begin today, -1D indicates that the schedule view will begin yesterday, and so on.
   - **Start Time** and **End Time** - This is the starting and ending time for the period in the schedule.

      ![](media/garagehive-schedule-views3.png)

### View and Setup Time Grids and Service Hours from the Schedule
**Time Grids** are system time allocations that help manage time slot availability for online bookings and **Service Hours** are the scheduled hours during which the resources are available for work. To view and setup the Time Grids and Service Hours from the schedule:
1. Open the **Schedule** from the Role Centre, select **Related** from the menu bar and choose either **Time Grids** or **Service Hours**.

   ![](media/garagehive-schedule-time-grids-and-service-hours1.png)

2. To learn more on how to setup the Time Grids follow this link, [Setting Up Time Grids](/docs/garagehive-onlinebooking-time-grids.html){:target="_blank"}.

   ![](media/garagehive-schedule-time-grids-and-service-hours2.png)

3. To learn more on how to setup the **Service Hours** follow this link, [Setting Up Service Hours](/docs/garagehive-service-hours-and-auto-clockout.html){:target="_blank"}.

   ![](media/garagehive-schedule-time-grids-and-service-hours3.png)


[Go back to top](#top)

### Adding Resources in the Schedule
In Garage Hive, resources refer to all of the assets that the company has that aid and support the business in completing its work, including the technicians. Technicians are added via [User Management](/docs/garagehive-user-management.html), but their appearance in the schedule can be controlled. Here's how to add or manage resources in the schedule in general:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Schedule Resource Group** and select the related link.
2. In the list that appears, select the **Default** resource group and then click **Specifications** from the menu bar.

    ![](media/garagehive-understanding-the-schedule-adding-resources1.gif)

3. The **Default** resource group's resources are displayed in the list. You can add a resource to the schedule from here by selecting a cell in the **Resource No.** column and choosing from the drop-down list.

    ![](media/garagehive-understanding-the-schedule-adding-resources2.gif) 

4. The resource is automatically added to the schedule after it is added to the list.

    ![](media/garagehive-understanding-the-schedule-adding-resources3.gif)


[Go back to top](#top)

### Rearranging Resources in the Schedule
Rearranging the resources, how they appear from top to bottom, helps organize which resources to be at the top and how they should follow each other. 

{% include tip.html title="Note" text="It is recommended to have the bays at the top and the technicians at the bottom." %}

To rearrange:
1. Search **Schedule Resource Group** from the ![](media/search_icon.png) icon, at the top-right corner, and select it from the options that appear. 
2. From the window that opens, select **Default**, as it is the group the resources are created.
3. Click on **Specifications** from the menu bar.

    ![](media/garagehive-understanding-the-schedule-rearrange1.gif)

4. From the list of all the resources displayed, select the resource to rearrange and click on **Move Up** or **Move Down** from the menu bar.

    ![](media/garagehive-understanding-the-schedule-rearrange2.gif)

{% include tip.html title="Tip" text="Remove any spaces before the resource name to ensure consistency." %}


[Go back to top](#top)

### Managing Service Hours in the Schedule
The service hours are the hours in the schedule when the resources are available for work. For example, you could add the technicians’ working hours as 08:00 a.m. to 17:00 p.m. every day. To change a resource's service hours:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Service Hours** and select related result.
2. The list that appears contains all of the resources that have been added in the system, with their service hours specified for various days of the week.

  ![](media/garagehive-understanding-the-schedule-service-hours1.gif)

3. Scroll to the resource for which you want to change the service hours, and then click on the line with the day you want to change the time and enter the time.
4. The schedule layout is updated to reflect this change.

  ![](media/garagehive-understanding-the-schedule-service-hours2.gif)


[Go back to top](#top)

### Adding Resources Calender Changes
Sometimes there might be a single change of the scheduled work time for the resources, and you have to change it in the schedule:
1. click on **Related** from the menu bar.
2. Select **Resource Calender Changes** in the service schedule page.

    ![](media/garagehive-understanding-the-schedule-calender-change1.gif)

3. Select the resource to adjust the working time on the **Resource Code** column. 
4. Enter the date in the **Date** column, add a **Description**.
5. Change the **Nonworking** column to either **Work Time Change** (to show the working time for the resource in the schedule) or **Nonworking** (to show the time the resource is not working in the schedule).
6. Finally, add the starting and ending times (if you want to block out the whole day, leave the starting and ending times blank).

    ![](media/garagehive-understanding-the-schedule-calender-change2.gif)

7. The selected time is blocked out for the resource, which also reduces the available working hours.

![](media/garagehive-understanding-the-schedule-calender-change3.png)


[Go back to top](#top)

### View the Statistics of the Schedule
The schedule statistical information summarizes the resources capacity, remaining hours after allocations, a list of all the allocations for the day, and the total Jobsheets for all the allocations made for the day. To view the statistics for a day:
1. From the view FastTab, select **Period Type** as **Day**.
2. The **Start Date** as the day you want to view the statistics.
3. Click on the **Statistics** from the menu bar.

![](media/garagehive-understanding-the-schedule-statistics1.gif)


[Go back to top](#top)

### Adding a Standard Event
A standard event is an allocation not related to a Jobsheet but adds other considerations about the resources, such as a sick off, etc. To add a standard event:
1. Click and drag in the booking slot along the resource to allocate.
2. Release up to the time when the standard event ends. 
3. Select the **Allocation Type** as **Standard Event**.
4. Select a standard event from the list or create a new standard event.
5. Add a **Comment** about the standard event and click **Ok**; this reduces the available hours and ensures that the resource is accurately booked.

    ![](media/garagehive-understanding-the-schedule-standard-event1.gif)


[Go back to top](#top)

### How to Exclude Some Standard Events When Calculating Available Hours
1. The schedule's available hours are shown in the header. They show the currently available hours after subtracting the total scheduled hours.

   ![](media/garagehive-understanding-the-schedule-exclude-standard-event1.png)

2. When you add a standard event, you can choose whether to exclude it or include it in the available hours calculation. To do so, select the ![](media/search_icon.png) icon in the top right corner, enter **Service Standard Events**, and click the related link.

   ![](media/garagehive-understanding-the-schedule-exclude-standard-event2.png)

3. Select the checkbox in the column **Exclude From Available Hours** for the standard events that you want to exclude from the calculation of available hours. To make the page editable, select **Edit List**.

   ![](media/garagehive-understanding-the-schedule-exclude-standard-event3.png)

4. The selected standard events will now be excluded from the Service Schedule's calculation of available hours.


[Go back to top](#top)

### Understanding the Emojis in an Allocation
The emojis are used in the allocations to visually help the service advisor and technicians understand status and requirements of the job. Here are some of the most commonly used emojis: <br>

* 📫 This indicates a posted Jobsheet. <br>
* ❌This indicates that the vehicle is not marked on site from the Jobsheet. <br>
* ✅ or ✔ This indicates that the vehicle has been marked as on site from the Jobsheet. <br>
* 🔑 This indicates that the vehicle key has been assigned a key tag. <br>
* 🆑 This indicates that the vehicle has been marked as requiring collection and delivery. <br>
* 🚗 This indicates that the customer requires a courtesy car, and it's marked in the Jobsheet. <br>
* 🌛 This indicates that the vehicle has been marked as staying overnight. <br>
* ⏰ This indicates that the customer has specified a time to collect the vehicle. <br>
* £ This indicates the amount including VAT. <br>
* ⚓ This indicates that the vehicle has been assigned a parking location code. <br>
* 🤷 or 🙋‍♀️ This indicates that the customer is waiting. <br>
* ➡️ This indicates the number of Jobsheet allocations available in the schedule.


[Go back to top](#top) 

### How to Add Schedule Allocations Count
The addition of allocations count improves the visibility of Jobsheet allocations within the schedule. Garage Hive uses a right arrow emoji (➡️) accompanied by a number to indicate the number of pending or in-progress allocations for each Jobsheet. This feature allows users to easily identify Jobsheets with multiple ongoing tasks, thereby enhancing workflow management. Here is how to add the allocations count:

1. In the top right corner, choose the ![](media/search_icon.png) icon, enter **schedule cell config**, and select the related link.

   ![](media/garagehive-schedule-allocation-count1.png)

2. Click on **New** to create a new line, and enter the following details on the new line for the columns indicated:
   * **Source Type** - 25006145 or 70420681 (for BC Cloud)
   * **Source Ref. No.** - 15020
   * **Source Ref. Description** - *This will be automatically filled.*
   * **Sequence** - 9999999
   * **Prefix** - ➡️ (To insert this arrow, press **[Win] + [.]** on Windows or **[Control + Command + Spacebar]** on macOS, then search for 'right arrow').

     ![](media/garagehive-schedule-allocation-count2.png)

3. Click the back arrow (&#8592;) to close the page.
4. When there is an allocation is added in the schedule, the emoji will appear on the allocation showing the number of Jobsheet allocations available in the schedule.

   ![](media/garagehive-schedule-allocation-count3.png)

5. If the emoji is not visible, you can hover your mouse over the allocation to view more information about the allocation.

   ![](media/garagehive-schedule-allocation-count4.png)


[Go back to top](#top)

### Using the Search Function in the Schedule
When there are many bookings in the schedule, it becomes harder to find an allocation that you are looking for easily. The search function helps you overcome this challenge by enabling you to search for an allocation using the customer name, vehicle registration No., vehicle make or model, or the Jobsheet No.:
1. From the view FastTab, under the **Search** field, enter the allocation details to search.
2. Press enter; this hides all the other allocations, leaving the allocation you need.

![](media/garagehive-understanding-the-schedule-search1.gif)


[Go back to top](#top)

### Adding an Allocation Type
Allocation Type appears after the drag and release action on the schedule, where you select which allocation to add.

   ![](media/garagehive-understanding-the-schedule15.png)

To add an allocation type in the schedule:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Service Schedule New Allocation Menu** and select the related result.

   ![](media/garagehive-understanding-the-schedule11.gif)

2. The list that appears contains all previously setup allocation menus. To add a new line, select **+New** from the menu bar. In the new line, select a **Work Group Code**. The work group code specifies the type of service work group that will be assigned.
3. The next column, **Line No.**, is a number that will be applied to the allocation to determine the order in which it will appear when selecting an allocation type. The lower the number, the higher it appears in the list, and vice versa.

   ![](media/garagehive-understanding-the-schedule12.gif)

4. The **Type** column specifies the type of allocation; it can be **New Service Order**, **Standard Event**, or **Existing Service Order**. Select the type and enter the **Description** (the text to be displayed when you are selecting an allocation type).

   ![](media/garagehive-understanding-the-schedule13.gif)

5. If you did not select **Standard Event** as the **Type** of allocation, leave the **Standard Event** column blank, and fill out the **Service Type** column if you selected either of the other two types of allocation. If you chose **Standard Event** as the type of allocation, fill in the **Standard Event** column with the available options and leave the **Service Type** column blank.

   ![](media/garagehive-understanding-the-schedule14.gif)

6. After filling in the required columns, exit the current page, and a new allocation type will be created.


[Go back to top](#top)

### Block Days from Booking in the Schedule
When a day in the schedule is blocked, it prevents any new allocations from being added. To block out a day in the schedule:

  {% include tip.html title="Note" text="New allocations can be made for existing jobs." %}

1. Open the schedule in your system, and enable the **Fully Booked** slider from the header.

   ![](media/garagehive-fully-booked-slider.png)

2. This will grey out the diary where there is no allocation.

The existing allocations in the schedule can be modified.


[Go back to top](#top)

### Putting an Allocation On Hold from the Schedule
To put an allocation on hold while it is in progress, follow these steps:
1. Open the schedule and go to the allocation that is **In Process**. Right click on it and select **On Hold**.

   ![](media/garagehive-on-hold-schedule1.png)

2. The allocation will change to red, indicating it is On Hold. To resume the allocation, right-click on it and select **Start**.
3. If you wish to complete the allocation, right-click on it and select **Finish**.

   ![](media/garagehive-on-hold-schedule2.png)


[Go back to top](#top)

<br>

### See Also

[Video: Understanding the schedule](https://www.youtube.com/watch?v=JSHb-4I0PCY){:target="_blank"} \
[Creating a booking from the schedule](/docs/garagehive-create-a-booking.html){:target="_blank"} \
[Adding a resource (person or machine) in Garage Hive](garagehive-adding-a-resource.html){:target="_blank"}









