The Test Bed foresees API operations to **deploy** and **undeploy** test suites. Managing test suites in this way is primarily used during **test suite development**, 
to allow the deployment of test suites via automation processes.

Test suite management operations make use of API keys to determine the information relevant to a specific call. These keys are:

* The key to identify a **specification**, displayed when :ref:`viewing a specification's details<domains__specification>`.
* The identifier of a **test suite**, displayed when :ref:`viewing a test suite's details<domains__test_suite_details>`.

The API includes the following operations to manage test suites:

* :ref:`deploy<api__test_suites__deploy>`: Deploy a (non-shared) test suite to a specification.
* :ref:`undeploy<api__test_suites__undeploy>`: Remove a (non-shared) test suite from a specification.
* :ref:`deployShared<api__test_suites__deployShared>`: Deploy a shared test suite to a community's domain.
* :ref:`undeployShared<api__test_suites__undeployShared>`: Remove a shared test suite from a community's domain.
* :ref:`linkShared<api__test_suites__linkShared>`: Link a shared test suite to one or more specifications.
* :ref:`unlinkShared<api__test_suites__unlinkShared>`: Unlink a shared test suite from one or more specifications.

Details on each operation, including sample requests and responses, are provided in the following sections.