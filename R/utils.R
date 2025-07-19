#' @keywords internal
remove_all_html_dependencies <- function(tag) {
  # Check if it's a valid tag
  if (!inherits(tag, "shiny.tag") && !is.list(tag)) {
    return(tag)
  }

  # Create a copy of the tag
  clean_tag <- tag

  # Remove dependencies from children
  if (!is.null(clean_tag$children)) {
    # Filter out any children that are HTML dependencies
    clean_tag$children <- lapply(clean_tag$children, function(child) {
      # If the child is an HTML dependency, return NULL
      if (is.list(child) && inherits(child, "html_dependency")) {
        return(NULL)
      }
      # Otherwise, recursively clean the child
      return(remove_all_html_dependencies(child))
    })

    # Remove NULL entries (the dependencies we filtered out)
    clean_tag$children <- Filter(Negate(is.null), clean_tag$children)
  }

  clean_tag
}

#' @keywords internal
recurse <- function(l, func, ...) {
  l <- func(l, ...)
  if(is.list(l) && length(l)>0){
    lapply(
      l,
      function(ll){
        recurse(ll, func, ...)
      }
    )
  } else {
    l
  }
}

#' @keywords internal
strip_dependencies_from_actions <- function(actions) {
  recurse(actions, function(x) {
    if(length(names(x)) > 0 && ("children" %in% names(x))) {
      if(!is.null(x$children$icon)) {
        x$children$icon <- remove_all_html_dependencies(x$children$icon)
      }
    }
    return(x)
  })
}
