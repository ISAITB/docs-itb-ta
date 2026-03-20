.. _serviceHealth:

Service health
==============

As part of your test setup, you may extend the test engine's built-in capabilities with :ref:`custom test services <domains__domain__service_list>`,
which are expected to be available and healthy for testing to be possible. The **service health dashboard** provides a
single place where you can get an overview of your custom services' health, test them, and investigate possible issues.
To access the dashboard select the **Service health** menu entry.

.. figure:: ../screenshots/service_health_dashboard.png
  :align: center

The dashboard uses a **card layout**, with each card representing a specific test service. Each card shows the relevant
:ref:`domain <domains__domain_details>`, the **name** of the service, an icon indicating the **service's type**
(validation, messaging or processing), and a **status icon** for its health status. The possible status icons and their meaning are as follows:

* **Success**, for a service that is working correctly.
* **Error**, for a service that is not working correctly and that would cause tests to fail.

Once the services have been tested, the aggregate status is also displayed as an **overall status** at the top of the dashboard.
Testing all services is done by means of the **Check services** button displayed in the panel's header.

.. figure:: ../screenshots/service_health_dashboard_tested.png
  :align: center

All service cards can be clicked to :ref:`show extended details <serviceHealth_details>` on the current configuration,
returned errors and the steps to take to address them. From such cards you can also test services individually.

Not all your configured test services need to be included for health monitoring in the health dashboard. You decide which
services will be included as part of a :ref:`test service's configuration <domains__domain_edit_service>`. You may choose
to skip services that are not currently in use, or that are already being monitored through other means.

.. _serviceHealth_details:

Service health details
----------------------

Each of the presented cards can be clicked to present extended details on the service in question. Doing so opens up a popup with
the service's overall status as well as further details.

.. figure:: ../screenshots/service_health_dashboard_details.png
  :align: center

In all cases the information displayed will reflect the service's configuration. You are presented also with clear
information on the service's impacts, and in case of **error** the information you need to know to evaluate
and take action. Specifically you will be presented with sections on:

* The **specific impact on tests**, providing information on the affected tests.
* The **steps to resolve the issue**, including troubleshooting guidance and links to further documentation.

The **Check status** button in the footer allows you to test the service's status. The **Close** button closes the
popup to return to the dashboard.