At the top of the system configuration panel you are provided with a **prepare for shutdown** toggle.

.. figure:: ../screenshots/system_configuration_shutdown.png
  :align: center

Toggling this on will put the Test Bed in shutdown preparation mode. When this is active no new test sessions will
be scheduled (although existing active ones are not impacted), and users will see a relevant persistent warning.
The purpose of this mode is to alert users of an imminent restart, and also to avoid inconsistent active test sessions
that appear frozen due to having not completed before the test engine was restarted.

.. figure:: ../screenshots/system_configuration_shutdown_warning.png
  :align: center
  :scale: 50%

The shutdown preparation mode can be deactivated at any time and will be automatically reset when the Test Bed restarts.