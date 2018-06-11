.. _introduction:

Introduction
============

Welcome to the **Interoperability Test Bed** user guide. The purpose of this guide is to help you use the 
Interoperability Test Bed to complete your conformance testing needs by documenting its interface, features 
and underlying processes. In addition it provides you with the context you need to understand the concepts 
it uses and get additional information if you choose to.

The approach followed by the user guide is based on use cases. Each distinct action you may carry out on the
interface is documented in a separate chapter covering the core sequence of steps you would take as well the
different options that each action may present to you.

For the sake of brevity the term "test bed" will be used to refer to the Interoperability Test Bed unless 
otherwise stated.

.. _introduction__what_is_the_test_bed:

What is the test bed?
---------------------

The test bed is a service offered by the European Commission, specifically the `Interoperability Test Bed Action`_ of DIGIT ISA,
to support the interoperability and conformance testing of projects that enable the development of cross-border public
services. Its purpose is to facilitate such projects by providing project leaders with the means to define their project's testing strategy 
that will be used by their participating organisations. The test services offered in this way may either be presented as a tool to help
in e.g. the development of relevant software, or even as a mandatory qualification step to consider software as conforming to a given
specification. Note that the focus of the test bed is software components and specifically:

* **Conformance** and **interoperability** to ensure that the software in question can participate in its foreseen information exchanges with 
  other parties in a correct and meaningful way. The test bed is not meant to help with a software's regression, performance or penetration testing.
* The **technical level** ensuring that the software implementation is correct but without addressing (at least directly) interoperability at other 
  levels such as the legal constructs in place or the relevant organisational processes the software supports.

At the core of the test bed is the **GITB test bed software**. This is a product of the `GITB project`_, a CEN standardisation initiative funded by
the European Commission’s DG GROW to define the specifications and software needed to support a generic interoperability test bed service.

.. _GITB project: http://www.cen.eu/work/areas/ict/ebusiness/pages/ws-gitb.aspx
.. _Interoperability Test Bed Action: https://joinup.ec.europa.eu/solution/interoperability-test-bed/about

.. _introduction__how_is_it_maintained:

How is it maintained?
~~~~~~~~~~~~~~~~~~~~~

Following the initial work from the CEN GITB workgroup, the maintenance and evolution of the GITB software and specifications has been taken over 
by the European Commission, specifically the `Interoperability Test Bed Action`_ of DIGIT ISA². The Action foresees the 
evolutive maintenance of the GITB software and specifications based on the needs of the testing community and publishes regular releases.

.. _Interoperability Test Bed Action: https://joinup.ec.europa.eu/solution/interoperability-test-bed/about

.. _introduction__glossary:

Glossary
--------

The glossary provided here is meant to acquaint you to the concepts used within the test bed. The sequence in which each concept is 
defined is selected to gradually build up your understanding of the complete terminology. In addition, to simplify definitions, the 
perspective adopted is that of the test bed, i.e. technical and with focus on software components.

.. _introduction__glossary__specification:

Specification
~~~~~~~~~~~~~

A **specification** is a detailed set of requirements that aim to precisely define an aspect of a software component's operation. From the 
perspective of the test bed, this would typically either be a content specification, focusing on the data that it produces or processes, 
or a messaging specification, focusing on the rules and message exchange steps that it needs to follow when interacting with one or 
more other components.

.. _introduction__glossary__conformance:

Conformance
~~~~~~~~~~~

**Conformance** of a software component to a specification relates to whether or not it meets its defined requirements. The process of 
conformance testing focuses on a single software component and is the process of ensuring in a measurable, non-ambiguous and repeatable
way that the specification's requirements are met.

.. _introduction__glossary__interoperability:

Interoperability
~~~~~~~~~~~~~~~~

**Interoperability** can be considered as the step that follows conformance and places the focus on two or more software components. 
Having established that each individual component conforms to one or more specifications, interoperability testing relates to the process 
or verifying that they can actually exchange information in a manner that is respected and understood by all. 

.. _introduction__glossary__domain:

Domain
~~~~~~

A **domain** in the test bed is the means by which related specifications are grouped together. It allows projects to define multiple 
specifications as a cohesive whole that may each be tested for conformance individually. Conforming to all specifications within a domain 
may be mandatory but could also be optional, depending on the project's needs.

.. _introduction__glossary__actor:

Actor
~~~~~

An **actor** is the term used to identify one participating entity in a specification. This becomes important especially in the case of
messaging specifications where multiple participants are typically defined; at least one to send messages and another to receive. When you
want to ensure that your software component conforms to a specification you need to select your target actor. Actors in the test bed are 
key considering that they serve to organise tests and determine what is actually being tested. Each test focuses on a single actor that is 
identified as the **System Under Test (SUT)** which is the part your software component needs to play. Other specification actors that are
relevant to the test in question are simulated by the test bed to automate and validate the information exchange.

As an example of this consider a specification defining a message exchange between a "Sender" and a "Receiver". If your software component 
is to act as the Receiver then the Sender will be simulated by the test bed and will generate messages for you to receive and respond to, 
with your responses being automatically validated according to the specification. Even if your component is supposed to both send and receive 
(i.e. participate in the exchange as either actor), the distinction is important as a different set of tests would apply per case.

.. _introduction__glossary__endpoint:

Endpoint
~~~~~~~~

An **endpoint** is related to an actor and refers to a named set of configuration parameters. In order to test, these parameters need to be
defined but how this happens depends on the role of each actor in the test in question. For a simulated actor the test bed will automatically
define the required parameters and present these to you (if relevant) so that you can take any needed configuration actions on your
software component before starting. On the other hand, when such configuration parameters are defined for an actor that you are testing as 
(i.e. your software component is the SUT), you will need to input the expected values before starting.

Continuing the Sender and Receiver example, if the communication in question is SOAP web service calls we would expect that the address of
each service endpoint would need to be configured. In case your system is acting as the Receiver you would need to provide to the test bed
the address of your service endpoint. Similarly, if you are acting as the Sender, the test bed would need to provide you the address to make
your calls on so that you can configure it in your software.

.. _introduction__glossary__organisation:

Organisation
~~~~~~~~~~~~

An **organisation** is the concept that maps to a member of the project who is using the test bed to test conformance. Each user belongs to
an organisation and its via the organisation that a a user can execute tests, inspect results and extract reports. An organisation can have
two types of users:

* A **user**, who is able to execute tests and inspect results.
* An **administrator**, who is also able to execute tests and inspect results, but is also able to manage configuration and the specifications
  to conform to.

.. _introduction__glossary__system:

System
~~~~~~

A **system** is related to an organisation and represents the actual software component that will be tested. In simple cases an organisation 
will have a single system and these can be conceptually interchangeable. It is often the case however that a single organisation defines 
multiple systems, each with its own specification conformance needs and testing history. The system in the test bed is actually the point 
where configuration for your software component is introduced and it is the system that is selected when defining the specifications you aim 
to test for.

.. _introduction__glossary__conformance_statement:

Conformance statement
~~~~~~~~~~~~~~~~~~~~~

A **conformance statement** is the concept that defines the statement (to be tested) that a given software component conforms to a given 
specification. From the perspective of the test bed this means more specifically that an organisation's system aims to conform to the 
requirements of a specific actor in the specification. Simply put, the conformance statement links a system to an actor. Conformance
statements are important as they encapsulate the goal of the test bed, to allow systems to test for conformance.

.. _introduction__glossary__community:

Community
~~~~~~~~~

A **community** is an administrative concept to group together related organisations. A real-world project or user community maps in the test 
bed to a community, with the project leader acting as the community administrator. A community is the level where such administrators manage 
organisations and their users, define specifications and tests, and follow up on the overall conformance testing progress. A community is typically
linked to a single domain, ensuring that community administrators have full access to manage their domain's specifications and tests, 
whereas organisation users are presented only with the specifications relevant to their needs.

.. _introduction__glossary__test_case:

Test case
~~~~~~~~~

A **test case** represents a set of steps and assertions that form a cohesive scenario for testing purposes. A specification's requirements
are implemented as one or more test cases in which the specification's actors are defined either as the SUT (i.e. the actual software components being
tested) or as being simulated by the test bed. In terms of implementation, a test case is an XML file authored using the `GITB Test Description Language
(TDL)`_. A test case is linked to a system's conformance statement when it defines the relevant statement's actor as the test case actor with SUT role.

.. _GITB Test Description Language (TDL): https://www.itb.ec.europa.eu/docs/tdl/latest

.. _introduction__glossary__test_suite:

Test suite
~~~~~~~~~~

A **test suite** is used to group together related test cases into a cohesive set. It provides context over the purpose of its contained test cases
and also allows for their automatic execution. A test suite is expressed as an XML file authored in the `GITB Test 
Description Language (TDL)`_ and is bundled in a ZIP archive along with its contained test cases and the resources they use.

.. _GITB Test Description Language (TDL): https://www.itb.ec.europa.eu/docs/tdl/latest

.. _introduction__glossary__test_step:

Test step
~~~~~~~~~

A **test step** is an individual action defined in a test case relevant to messaging, processing, control flow or validation. Steps
can either succeed or fail, with the latter case resulting in an overall execution failure for the test case.

.. _introduction__glossary__test_session:

Test session
~~~~~~~~~~~~

A **test session** represents a single execution of a test case. It typically involves the provision of configuration before starting the test, 
goes through the steps the test case foresees and eventually completes providing the session’s overall result.

.. _introduction__glossary__test_result:

Test result
~~~~~~~~~~~

The **test result** is the outcome of a test session and can be one of the following:

* **SUCCESS:** All the steps defined in the test case have completed successfully.
* **FAILURE:** At least one step defined in the test case has failed.
* **UNDEFINED:** The test case has either not been executed or was forcibly terminated before completing.

An overall conformance statement's result depends on the latest results of its related test sessions. To consider a conformance statement as being
successfully tested, all test cases must be executed and have their latest result as "SUCCESS".

.. _introduction__glossary__example_use_of_concepts:

Example use of concepts
~~~~~~~~~~~~~~~~~~~~~~~

The purpose of the following example is to help you understand how some of the key test bed concepts would map to the real world. Consider a solution
named "EU message exchange" used within the EU whereby Member State endpoint systems exchange messages with a central EU portal. There are different
message types ("Message1", "Message2" and "Message3") each with a specific syntax and content rules. Member States can optionally support each message type
but if they do they need to ensure that they can successfully use them when interacting with the EU portal.

In this case the previously discussed test bed concepts could be mapped as follows:

* **Domain:** This a logical concept to group together specifications. It can be called "EU message exchange".
* **Specifications:** Given that we have three message types that can be optionally supported, one way to map this
  would be to define one specification per message, named using the message type ("Message1", "Message2" and "Message3").
* **Actors:** The actors relevant to each specification are the same in all cases. We would have one actor for the EU 
  portal named "EU portal" and another for the Member State endpoint systems named "MS endpoint".
* **Organisation:** The parties participating in the project are Member States. It thus makes sense to define an organisation
  per Member State that will be testing.
* **Community:** The community is the logical grouping of the solution's related organisations. It can be called "EU message exchange community".
* **System:** Member States having only one connecting endpoint would only define one system. However, in cases where multiple endpoint systems
  can operate, we would have multiple system entries, one per actual software system that will need to test.
* **Conformance statements:** Conformance statements link a specification's actor to an organisation's system. In this case each Member State
  organisation would create a conformance statement selecting the "MS endpoint" actor as the SUT. This would be done for each message type
  (i.e. specification) that the Member State plans to support.
* **Test suites and test cases:** The organisation and design of test cases relates to the assertions you want to test. Typically you could expect
  test cases where the "MS endpoint" actor, as the SUT, sends/receives messages to/from the simulated "EU portal". Validations can 
  take place on the exchanged messages and also over entire message conversations to ensure e.g. that responses are not only valid but that they also
  correctly reference the expected requests.

.. _introduction__role:

Your role
---------

Your test bed account is configured as an **organisation user**. This means that you are a member of an organisation that is using the test bed to execute 
tests to measure conformance towards one or more specifications.

Prerequisites
~~~~~~~~~~~~~

Apart from having your account created, an administrator must come before you to:

* Create the entry for your system to be tested.
* Create one or more conformance statements to define the tests you need to run.
* Enter any required configuration parameters needed for your system before testing.

Expectations
~~~~~~~~~~~~

As an **organisation user** you are expected to carry out the following main activities:

* View the conformance statements and tests that have been configured for you by your administrator (see :ref:`manage_your_conformance_statements`).
* Execute new tests and consult their results (see :ref:`execute_tests`).
* Review your overall conformance status (see :ref:`manage_your_conformance_statements__view_a_conformance_statements_details`) and test history (see :ref:`view_your_test_history`).

.. _introduction__system_requirements:

System requirements
-------------------

The test bed is a web application with minimal prerequisites for its use. The following web browsers have been successfully tested for support:

* Apple Safari.
* Google Chrome.
* Microsoft Edge.
* Microsoft Internet Explorer (minimum version 11).
* Mozilla Firefox.
* Opera.

Given that the test bed makes use of JavaScript to power its user interface, please ensure that your browser has no security configuration in place 
that blocks JavaScript execution. In addition, in terms of network connectivity, the test bed uses `web sockets`_ to push updates to your web browser
during the execution of test sessions. If you experience test sessions starting but appearing as frozen with no visual updates, it could be that you
are behind a proxy or firewall that blocks the web socket protocol. In such a case please contact your network administrator for assistance.

.. _web sockets: https://en.wikipedia.org/wiki/WebSocket 