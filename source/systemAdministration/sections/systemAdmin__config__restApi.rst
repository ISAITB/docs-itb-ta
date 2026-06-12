One configuration option of note is the **REST API**, which determines whether or not the Test Bed's :ref:`REST API <api>` will be enabled
and how it will be used.

.. figure:: ../screenshots/system_configuration_rest_api.png
  :align: center

When the REST API is enabled, this section will display the Test Bed's **Master API key** and enable its management. This is used for
authorisation purposes in certain REST operations that require Test Bed administrator privileges, such as :ref:`creating a new community <community_testbed_communities__create>`.

Regarding the value of the Master API key, this is randomly assigned to the Test Bed upon initial startup, thus ensuring that two instances will
never inadvertently share the same value. In case you need to foresee a predetermined value for this, for example if you automate an instance's
initial configuration via REST API calls, you may set its value by providing the ``AUTOMATION_API_MASTER_KEY`` environment variable to the gitb-ui
application.

The Test Bed's REST API is usually used in controlled situations, either as a development tool to speed up operations, or
as part of internal automated testing processes. In case you plan to expose the REST API to external users, it is strongly
advised to enable **API usage restrictions** to control how much it is used. Without such restrictions, you will have no
control over traffic initiated by users with valid API keys.

When you enable usage restrictions, the settings and thresholds you can tweak include:

* Whether to **allow bulk tests**. This affects the :ref:`start operation <api__test_sessions__start>` used to trigger tests,
  and when disabled will require that only individual test cases can be executed per call.
* The **total API usage** threshold. This defines how many calls per minute can be made for a specific API key for the
  entire REST API.
* The threshold **per operation**. This defines the default calls per minute allowed per API key and each individual operation.

In relation to this last setting, you may also fine-tune your limits by adding limits for **specific operations**. You can look up
one or more operations by path and include them to specify their threshold. Added operations are presented with their path
and HTTP method, as well as a tooltip with the operation's description. Finally, operation-specific thresholds can be removed
either individually or in bulk.

.. note::
  API usage thresholds are defined using buckets of evenly-issued tokens. Simply put, a threshold of 120 calls per minute
  means that each second you can make two additional calls, with a maximum of 120 per minute.