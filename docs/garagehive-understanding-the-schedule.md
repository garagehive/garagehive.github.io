---
layout: docs
title: Understanding the Schedule  
---

# Understanding the Schedule
The service schedule is a tool predominantly used to manage your workshop. Garage Hive works by allocating time rather than jobsheets within the schedule; this allows you to load time accurately.

## In this article
1. [Understanding the schedule layout](#understanding-the-schedule-layout)
2. [Understanding the colours within the schedule](#understanding-the-colours-within-the-schedule)
3. [Rearranging resources in the schedule](#rearranging-resources-in-the-schedule)
4. [Adding resources calender changes](#adding-resources-calender-changes)
5. [View the statistics of the schedule](#view-the-statistics-of-the-schedule)
6. [Adding a standard event](#adding-a-standard-event)
7. [Understanding the emojis in an allocation](#understanding-the-emojis-in-an-allocation)
8. [Using the search function in the schedule](using-the-search-function-in-the-schedule)

###  Understanding the schedule layout
The service schedule layout is divided into the following parts:

![](media/garagehive-understanding-the-schedule-layout1.png)

1. **The Actions Bar:** this is where you find the different actions to use as you navigate through the schedule.
2. **The View FastTab:** this helps you to filter what to view in the schedule according to your preference.
3. **The Schedule Timeline:** this shows the day and time in the schedule. The red line in the schedule, running from top to bottom, is the current time of the day. 
4. **The Booking Slots:** this is where the allocations bookings are made and displayed. You can make multiple allocations for a single jobsheet. The colour of the booking changes depending on the allocation status; see [Understanding the colours within the schedule](#understanding-the-colours-within-the-schedule).

    >   **Example** <br>
    >   If you are booking in a gearbox repair job, you would not be doing all of the work in one go.<br>
    >
    >    Garage Hive allows you to make multiple allocations of one job, therefore being able to accurately load your day with jobs you will actually be working on, therefore your statistics of available hours will also be accurate. 

5. The Resources: these are all the resources available to work. When the resource is clocked as working, the colour changes to green.

###  Understanding the Colours Within the Schedule
The schedule colours are used to help understand the different work statuses for each work schedule. The following table explains the default colours that are set up in the system. You can change the colours to your preference.
<br>

| Default Colour | | Status | | Notes |
| :--------------------------------- | :--- | :----------- | :--- | :----------- |
![](media/garagehive-understanding-the-schedule1.png) (**Light Green**) | | **IN PROCESS** | | A technician is currently working on this allocation (Do not move this allocation). It is dynamic and will grow or shrink based on the technician's clockings for this allocation. |
| | | | |
![](media/garagehive-understanding-the-schedule2.png) (**Blue**) | | **PENDING** | | This is an allocation that hasn't been started. |
| | | | |
![](media/garagehive-understanding-the-schedule3.png) (**Purple**) | | **FINISHED** | | A technician has clocked onto this allocation and completed their part of this job, whether that be due to requiring additional authorisation or that it is fully completed (Do not move this allocation). |
| | | | |
![](media/garagehive-understanding-the-schedule4.png) (**Green**) | | **READY** | | The jobsheet status has been manually set to **READY**, meaning the vehicle is ready for collection. The customer has been contacted and the invoice has been prepared. (Do not move this allocation) |
| | | | |
![](media/garagehive-understanding-the-schedule5.png) (**Grey with** 📫) | | **POSTED** | | The postbox symbol means that the jobsheet for this allocation has been invoiced and posted to the accounts. |
| | | | |
![](media/garagehive-understanding-the-schedule6.png) (**Grey with** ✅) | | **REALLOCATED** | | The vehicle is still on site and the jobsheet is still open. A new allocation has been made for this vehicle within the schedule, turning any previous allocations grey. |
| | | | |
![](media/garagehive-understanding-the-schedule9.png) (**Red**) | | **ON HOLD** | | A paused allocation can be moved on the schedule during the same day for a technician to resume this job. If it gets to the end of the day and there are still paused allocations, deallocate these and make a new allocation for the next day. |
| | | | |
![](media/garagehive-understanding-the-schedule7.png) (**Pink**) | | **AWAITING AUTHORISATION** | | You are waiting for authorisation from either the customer/ lease/ fleet company (You have to manually change the work status code to awaiting authorisation) |
| | | | |
![](media/garagehive-understanding-the-schedule8.png) (**Brown**) | | **AWAITING PARTS** | | Parts have been ordered and you are waiting for them to arrive before reallocating. (You have to manually change the work status code to awaiting parts) |

<br>

### Rearranging resources in the schedule
Rearranging the resources, how they appear from top to bottom, helps organize which resources to be at the top and how they should follow each other. 

>**Note:**
>
>It is recommended to have the bays at the top and the technicians at the bottom.

To rearrange:
1. Search **Schedule Resource Group** from the search icon at the top-right corner, and select it from the options that appear. 
2. From the window that opens, select **Default**, as it is the group the resources are created.
3. Click on **Specifications** from the actions bar.

    ![](media/garagehive-understanding-the-schedule-rearrange1.gif)

4. From the list of all the resources is displayed, select the resource to rearrange and click on **Move Up** or **Move Down** from the actions bar.

    ![](media/garagehive-understanding-the-schedule-rearrange2.gif)

### Adding resources calender changes
Sometimes there might be a single change of the scheduled work time for the resources, and you have to change it in the schedule:
1. click on **Related** from the actions bar.
2. Select **Resource Calender Changes** in the service schedule page.

    ![](media/garagehive-understanding-the-schedule-calender-change1.gif)

3. Select the resource to adjust the working time on the **Resource Code** column. 
4. Enter the date in the **Date** column, add a **Description**.
5. Change the **Nonworking** column to either **Work Time Change** (to show the working time for the resource in the schedule) or **Nonworking** (to show the time the resource is not working in the schedule).
6. Finally, add the starting and ending times (if you want to block out the whole day, leave the starting and ending times blank).

    ![](media/garagehive-understanding-the-schedule-calender-change2.gif)

7. The selected time is blocked out for the resource, which also reduces the available working hours.

![](media/garagehive-understanding-the-schedule-calender-change3.png)

### View the statistics of the schedule
The schedule statistical information summarizes the resources capacity, remaining hours after allocations, a list of all the allocations for the day, and the total jobsheets for all the allocations made for the day. To view the statistics for a day:
1. From the view FastTab, select **Period Type** as **Day**.
2. The **Start Date** as the day you want to view the statistics.
3. Click on the **Statistics** from the actions bar.

![](media/garagehive-understanding-the-schedule-statistics1.gif)


### Adding a standard event
A standard event is an allocation not related to a jobsheet but adds other considerations about the resources, such as a sick off, etc. To add a standard event:
1. Click and drag in the booking slot along the resource to allocate.
2. Release up to the time when the standard event ends. 
3. Select the **Allocation Type** as **Standard Event**.

    ![](media/garagehive-understanding-the-schedule-standard-event1.gif)

4. Select a standard event from the list or create a new standard event.
5. Add a **Comment** about the standard event and click **Ok**; this reduces the available hours and ensures that the resource is accurately booked.

![](media/garagehive-understanding-the-schedule-standard-event2.gif)

### Understanding the emojis in an allocation
The emojis are used in the allocations to visually help the service advisor and technicians understand status and requirements of the job. Here are some of the most commonly used emojis: <br>

* 📫 This indicates a posted jobsheet. <br>
* ❌This indicates that the vehicle is not marked on site from the jobsheet. <br>
* ✅ This indicates that the vehicle has been marked as on site from the jobsheet. <br>
* 🔑 This indicates that the vehicle key has been assigned a key tag <br>
* 🆑 This indicates that the vehicle has been marked as requiring collection and delivery. <br>
* 🚗 This indicates that the customer requires a courtesy car, and it's marked in the jobsheet. <br>
* 🌛 This indicates that the vehicle has been marked as staying overnight. <br>
* ⏰ This indicates that the customer has specified a time to collect the vehicle. <br>

### Using the search function in the schedule
When there are many bookings in the schedule, it becomes harder to find an allocation that you are looking for easily. The search function helps you overcome this challenge by enabling you to search for an allocation using the customer name, vehicle registration No., vehicle make or model, or the jobsheet No.:
1. From the view FastTab, under the **Search** field, enter the allocation details to search.
2. Press enter; this hides all the other allocations, leaving the allocation you need.

![](media/garagehive-understanding-the-schedule-search1.gif)



### See Also

[Video: Understanding the schedule](https://www.youtube.com/watch?v=JSHb-4I0PCY) <br>

[Creating a booking from the schedule](/docs/garagehive-create-a-booking.html) <br>









