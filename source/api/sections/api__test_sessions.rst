Apart from launching tests through the user interface you may also launch, manage and report on test sessions using REST API calls. A typical scenario would
be to do so as part of a development or quality assurance workflow that would involve the following steps:

1. Upon changes to your system, or at given intervals, deploy and initialise the latest version of your system.
2. Once your system is ready, use the Test Bed's REST API to launch a series of test sessions for your system.
3. Have your system proceed, via scripting or responding to Test Bed requests, to complete the launched test sessions.
4. Monitor the progress of the launched test sessions by periodically polling the Test Bed for updates.
5. Once all test sessions are complete, compile an overview report and shut down your system.

All test session management operations identify relevant data via API keys that are :ref:`managed as part of the organisation's details<manage_organisation__rest>`.
API keys are defined to cover the following information:

* **Organisation:** The key to identify the specific organisation for which test sessions will be launched or managed.
* **System:** The key to determine the system for which new test sessions are to be launched.
* **Actor:** The key to determine the target specification actor for which to test conformance. Recall that the combination of system and actor
  essentially define a :ref:`conformance statement<manage_your_conformance_statements>`.
* **Test suite:** The key to determine a specific test suite.
* **Test case:** The key to determine a specific test case.

Three operations are made available that allow you to launch, monitor and manage test sessions:

* :ref:`start<api__test_sessions__start>`: Launch one or more test sessions relevant to a given conformance statement.
* :ref:`status<api__test_sessions__status>`: Query the status of one or more test sessions.
* :ref:`stop<api__test_sessions__stop>`: Stop one or more test sessions.

All these operations are HTTP calls that include the following:

* A HTTP header named ``ITB-API-KEY`` set with the **organisation API key**. This header is required to authenticate the request.
* A **JSON payload** provided as the body of the request to determine the parameters of the requested action.

Details on each operation, including sample requests and responses, are provided in the following sections.
