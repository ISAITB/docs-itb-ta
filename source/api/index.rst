.. _api:

REST API
========

The Test Bed's REST API allows you to carry out most operations without connecting to its user interface. Its typical use case is to allow
integration with automated processes enabling use cases such as **automated testing** and **continuous integration**. For
test developers certain API operations may also be interesting as it allows them to more easily validate changes while **developing test cases**.

As a general note, identifying the operations' caller and referring to existing data in the Test Bed is done via **API keys**. For operations that would
involve choices and confirmations if done via their corresponding user interface screens, these are provided in each case as inputs of the relevant REST calls.

The REST API foresees the following types of operations:

* Management of communities, organisations and systems (see :ref:`api__community`).
* Management of configuration property definitions and values (see :ref:`api__configuration`).
* Management of domains, specification groups, specifications and actors (see :ref:`api__domains`).
* Management of conformance statements (see :ref:`api__conformance_statements`).
* Launch and management of test sessions (see :ref:`api__test_sessions`).
* Management of test suites (see :ref:`api__test_suites`).

These sets of operations are documented in the sections that follow.

.. note::

  Using the Test Bed's REST API is an advanced feature that needs to first be enabled before it can be used. This is done
  by setting the `AUTOMATION_API_ENABLED`_ property to true in the Test Bed's configuration, or through the user interface
  via the :ref:`system configuration screen <systemAdmin__config>`.

.. _api__community:

Community management
--------------------

.. include:: /api/sections/api__community.rst

.. _api__community__createCommunity:

createCommunity
~~~~~~~~~~~~~~~

.. include:: /api/sections/api__community__createCommunity.rst

.. _api__community__updateCommunity:

updateCommunity
~~~~~~~~~~~~~~~

.. include:: /api/sections/api__community__updateCommunity.rst

.. _api__community__deleteCommunity:

deleteCommunity
~~~~~~~~~~~~~~~

.. include:: /api/sections/api__community__deleteCommunity.rst

.. _api__community__getOrganisations:

getOrganisations
~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__community__getOrganisations.rst

.. _api__community__createOrganisation:

createOrganisation
~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__community__createOrganisation.rst

.. _api__community__getOrganisation:

getOrganisation
~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__community__getOrganisation.rst

.. _api__community__updateOrganisation:

updateOrganisation
~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__community__updateOrganisation.rst

.. _api__community__deleteOrganisation:

deleteOrganisation
~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__community__deleteOrganisation.rst

.. _api__community__getSystems:

getSystems
~~~~~~~~~~

.. include:: /api/sections/api__community__getSystems.rst

.. _api__community__createSystem:

createSystem
~~~~~~~~~~~~

.. include:: /api/sections/api__community__createSystem.rst

.. _api__community__getSystem:

getSystem
~~~~~~~~~

.. include:: /api/sections/api__community__getSystem.rst

.. _api__community__updateSystem:

updateSystem
~~~~~~~~~~~~

.. include:: /api/sections/api__community__updateSystem.rst

.. _api__community__deleteSystem:

deleteSystem
~~~~~~~~~~~~

.. include:: /api/sections/api__community__deleteSystem.rst

.. _api__configuration:

Configuration management
------------------------

.. include:: /api/sections/api__configuration.rst

.. _api__configuration__configure:

configure
~~~~~~~~~

.. include:: /api/sections/api__configuration__configure.rst

.. _api__configuration__createDomainProperty:

createDomainProperty
~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__configuration__createDomainProperty.rst

.. _api__configuration__updateDomainProperty:

updateDomainProperty
~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__configuration__updateDomainProperty.rst

.. _api__configuration__deleteDomainProperty:

deleteDomainProperty
~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__configuration__deleteDomainProperty.rst

.. _api__configuration__searchTestServices:

searchTestServices
~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__configuration__searchTestServices.rst

.. _api__configuration__createTestService:

createTestService
~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__configuration__createTestService.rst

.. _api__configuration__updateTestService:

updateTestService
~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__configuration__updateTestService.rst

.. _api__configuration__deleteTestService:

deleteTestService
~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__configuration__deleteTestService.rst

.. _api__configuration__createOrganisationProperty:

createOrganisationProperty
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__configuration__createOrganisationProperty.rst

.. _api__configuration__updateOrganisationProperty:

updateOrganisationProperty
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__configuration__updateOrganisationProperty.rst

.. _api__configuration__deleteOrganisationProperty:

deleteOrganisationProperty
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__configuration__deleteOrganisationProperty.rst

.. _api__configuration__createSystemProperty:

createSystemProperty
~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__configuration__createSystemProperty.rst

.. _api__configuration__updateSystemProperty:

updateSystemProperty
~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__configuration__updateSystemProperty.rst

.. _api__configuration__deleteSystemProperty:

deleteSystemProperty
~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__configuration__deleteSystemProperty.rst

.. _api__configuration__createStatementProperty:

createStatementProperty
~~~~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__configuration__createStatementProperty.rst

.. _api__configuration__updateStatementProperty:

updateStatementProperty
~~~~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__configuration__updateStatementProperty.rst

.. _api__configuration__deleteStatementProperty:

deleteStatementProperty
~~~~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__configuration__deleteStatementProperty.rst

.. _api__conformance_statements:

Conformance statement management
--------------------------------

.. include:: /api/sections/api__conformance_statements.rst

.. _api__conformance_statements__get:

get
~~~

.. include:: /api/sections/api__conformance_statements__get.rst

.. _api__conformance_statements__create:

create
~~~~~~

.. include:: /api/sections/api__conformance_statements__create.rst

.. _api__conformance_statements__delete:

delete
~~~~~~

.. include:: /api/sections/api__conformance_statements__delete.rst

.. _api__conformance_statements__report:

report
~~~~~~

.. include:: /api/sections/api__conformance_statements__report.rst

.. _api__domains:

Domain management
-----------------

.. include:: /api/sections/api__domains.rst

.. _api__domain__createDomain:

createDomain
~~~~~~~~~~~~

.. include:: /api/sections/api__domain__createDomain.rst

.. _api__domain__updateDomain:

updateDomain
~~~~~~~~~~~~

.. include:: /api/sections/api__domain__updateDomain.rst

.. _api__domain__getCommunityDomain:

getCommunityDomain
~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__domain__getCommunityDomain.rst

.. _api__domain__deleteDomain:

deleteDomain
~~~~~~~~~~~~

.. include:: /api/sections/api__domain__deleteDomain.rst

.. _api__domain__getDomain:

getDomain
~~~~~~~~~

.. include:: /api/sections/api__domain__getDomain.rst

.. _api__domain__searchDomains:

searchDomains
~~~~~~~~~~~~~

.. include:: /api/sections/api__domain__searchDomains.rst

.. _api__domain__createSpecificationGroup:

createSpecificationGroup
~~~~~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__domain__createSpecificationGroup.rst

.. _api__domain__updateSpecificationGroup:

updateSpecificationGroup
~~~~~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__domain__updateSpecificationGroup.rst

.. _api__domain__deleteSpecificationGroup:

deleteSpecificationGroup
~~~~~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__domain__deleteSpecificationGroup.rst

.. _api__domain__getSpecificationGroup:

getSpecificationGroup
~~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__domain__getSpecificationGroup.rst

.. _api__domain__searchSpecificationGroups:

searchSpecificationGroups
~~~~~~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__domain__searchSpecificationGroups.rst

.. _api__domain__createSpecification:

createSpecification
~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__domain__createSpecification.rst

.. _api__domain__updateSpecification:

updateSpecification
~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__domain__updateSpecification.rst

.. _api__domain__deleteSpecification:

deleteSpecification
~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__domain__deleteSpecification.rst

.. _api__domain__getSpecification:

getSpecification
~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__domain__getSpecification.rst

.. _api__domain__searchSpecifications:

searchSpecifications
~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__domain__searchSpecifications.rst

.. _api__domain__searchSpecificationsInGroup:

searchSpecificationsInGroup
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. include:: /api/sections/api__domain__searchSpecificationsInGroup.rst

.. _api__domain__createActor:

createActor
~~~~~~~~~~~

.. include:: /api/sections/api__domain__createActor.rst

.. _api__domain__updateActor:

updateActor
~~~~~~~~~~~

.. include:: /api/sections/api__domain__updateActor.rst

.. _api__domain__deleteActor:

deleteActor
~~~~~~~~~~~

.. include:: /api/sections/api__domain__deleteActor.rst

.. _api__domain__getActor:

getActor
~~~~~~~~

.. include:: /api/sections/api__domain__getActor.rst

.. _api__domain__searchActors:

searchActors
~~~~~~~~~~~~

.. include:: /api/sections/api__domain__searchActors.rst

.. _api__test_sessions:

Test session management
-----------------------

.. include:: /api/sections/api__test_sessions.rst

.. _api__test_sessions__start:

start
~~~~~

.. include:: /api/sections/api__test_sessions__start.rst

.. _api__test_sessions__status:

status
~~~~~~

.. include:: /api/sections/api__test_sessions__status.rst

.. _api__test_sessions__stop:

stop
~~~~

.. include:: /api/sections/api__test_sessions__stop.rst

.. _api__test_sessions__report:

report
~~~~~~

.. include:: /api/sections/api__test_sessions__report.rst

.. _api__test_suites:

Test suite management
---------------------

.. include:: /api/sections/api__test_suites.rst

.. _api__test_suites__deploy:

deploy
~~~~~~

.. include:: /api/sections/api__test_suites__deploy.rst

.. _api__test_suites__undeploy:

undeploy
~~~~~~~~

.. include:: /api/sections/api__test_suites__undeploy.rst

.. _api__test_suites__deployShared:

deployShared
~~~~~~~~~~~~

.. include:: /api/sections/api__test_suites__deployShared.rst

.. _api__test_suites__undeployShared:

undeployShared
~~~~~~~~~~~~~~

.. include:: /api/sections/api__test_suites__undeployShared.rst

.. _api__test_suites__linkShared:

linkShared
~~~~~~~~~~

.. include:: /api/sections/api__test_suites__linkShared.rst

.. _api__test_suites__unlinkShared:

unlinkShared
~~~~~~~~~~~~

.. include:: /api/sections/api__test_suites__unlinkShared.rst

.. _api__openapi:

OpenAPI documentation
---------------------

.. include:: /api/sections/api__openapi.rst

.. _api__health:

Health monitoring
-----------------

.. include:: /api/sections/api__health.rst
