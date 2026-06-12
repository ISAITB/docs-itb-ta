The **deleteSpecificationGroup** operation is used to delete an existing specification group. To use it make an HTTP ``DELETE`` to path ``/api/rest/group/{group}``,
setting ``{group}`` to the target specification group's API key. In addition, you must include in your request an HTTP header named
``ITB-API-KEY`` set to a **community API key**. This API key identifies the community that is able to manage the group's domain, either by
being directly linked to it or being linked to no domain.

This operation takes no payload when making a request. If the target specification group has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.
