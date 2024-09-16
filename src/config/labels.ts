export const labels = {
  toasts: {
    titles: {
      error: "Error",
      warning: "Warning",
      success: "Success",
      info: "Info",
    },
  },
  pages: {
    index: {
      title: "webtunes",
      description: "webtunes",
      buttons: {
        media: {
          label: "Media",
        },
        playlists: {
          label: "Playlists",
        },
        bindings: {
          label: "Bindings",
        },
      },
    },
    mediaList: {
      title: "Media • webtunes",
      description: "webtunes",
    },
    media: {
      title: (id: string) => `Media ${id} • webtunes`,
      description: "webtunes",
    },
    mediaNotFound: {
      text: "Media not found",
    },
    newMedia: {
      title: "New Media • webtunes",
      description: "webtunes",
    },
    playlistList: {
      title: "Playlists • webtunes",
      description: "webtunes",
    },
    playlist: {
      title: (id: string) => `Playlist ${id} • webtunes`,
      description: "webtunes",
    },
    playlistNotFound: {
      text: "Playlist not found",
    },
    newPlaylist: {
      title: "New Playlist • webtunes",
      description: "webtunes",
    },
    bindingList: {
      title: "Bindings • webtunes",
      description: "webtunes",
    },
    binding: {
      title: (id: string) => `Binding ${id} • webtunes`,
      description: "webtunes",
    },
    bindingNotFound: {
      text: "Binding not found",
    },
    newBinding: {
      title: "New Binding • webtunes",
      description: "webtunes",
    },
    notFound: {
      title: "Not Found • webtunes",
      description: "webtunes",
      text: "Page not found",
    },
    error: {
      title: "Error • webtunes",
      description: "webtunes",
      text: "Something went wrong",
      buttons: {
        retry: {
          label: "Retry",
        },
      },
    },
  },
  widgets: {
    mediaList: {
      tiles: {
        media: {
          text: (id: string) => `${id}`,
        },
      },
      buttons: {
        create: {
          label: "Create",
        },
      },
      empty: {
        text: "No media...",
      },
    },
    media: {
      buttons: {
        upload: {
          label: "Upload",
        },
        download: {
          label: "Download",
        },
      },
      form: {
        fields: {
          name: {
            title: "Name",
            errors: {
              missing: "Name is required",
            },
          },
        },
        buttons: {
          save: {
            label: "Save",
          },
          delete: {
            label: "Delete",
          },
        },
      },
      toasts: {
        update: {
          error: (id: string) => `Failed to update media ${id}`,
          success: (id: string) => `Media ${id} updated`,
        },
        delete: {
          success: (id: string) => `Media ${id} deleted`,
        },
        upload: {
          noFile: "No file selected",
          error: (id: string) => `Failed to upload content for media ${id}`,
          success: (id: string) => `Content uploaded for media ${id}`,
        },
      },
    },
    newMedia: {
      form: {
        fields: {
          name: {
            title: "Name",
            errors: {
              missing: "Name is required",
            },
          },
        },
        buttons: {
          create: {
            label: "Create",
          },
        },
      },
      toasts: {
        create: {
          error: "Failed to create media",
          success: (id: string) => `Media ${id} created`,
        },
      },
    },
    playlistList: {
      tiles: {
        playlist: {
          text: (id: string) => `${id}`,
        },
      },
      buttons: {
        create: {
          label: "Create",
        },
      },
      empty: {
        text: "No playlists...",
      },
    },
    playlist: {
      form: {
        fields: {
          name: {
            title: "Name",
            errors: {
              missing: "Name is required",
            },
          },
        },
        buttons: {
          save: {
            label: "Save",
          },
          delete: {
            label: "Delete",
          },
        },
      },
      toasts: {
        update: {
          error: (id: string) => `Failed to update playlist ${id}`,
          success: (id: string) => `Playlist ${id} updated`,
        },
        delete: {
          success: (id: string) => `Playlist ${id} deleted`,
        },
      },
    },
    newPlaylist: {
      form: {
        fields: {
          name: {
            title: "Name",
            errors: {
              missing: "Name is required",
            },
          },
        },
        buttons: {
          create: {
            label: "Create",
          },
        },
      },
      toasts: {
        create: {
          error: "Failed to create playlist",
          success: (id: string) => `Playlist ${id} created`,
        },
      },
    },
    bindingList: {
      tiles: {
        binding: {
          text: (id: string) => `${id}`,
        },
      },
      buttons: {
        create: {
          label: "Create",
        },
      },
      empty: {
        text: "No bindings...",
      },
    },
    binding: {
      form: {
        fields: {
          playlist: {
            title: "Playlist",
            option: (id: string) => `${id}`,
            errors: {
              missing: "Playlist is required",
            },
          },
          media: {
            title: "Media",
            option: (id: string) => `${id}`,
            errors: {
              missing: "Media is required",
            },
          },
          rank: {
            title: "Rank",
            errors: {
              missing: "Rank is required",
            },
          },
        },
        buttons: {
          save: {
            label: "Save",
          },
          delete: {
            label: "Delete",
          },
        },
      },
      toasts: {
        update: {
          error: (id: string) => `Failed to update binding ${id}`,
          success: (id: string) => `Binding ${id} updated`,
        },
        delete: {
          success: (id: string) => `Binding ${id} deleted`,
        },
      },
    },
    newBinding: {
      form: {
        fields: {
          playlist: {
            title: "Playlist",
            option: (id: string) => `${id}`,
            errors: {
              missing: "Playlist is required",
            },
          },
          media: {
            title: "Media",
            option: (id: string) => `${id}`,
            errors: {
              missing: "Media is required",
            },
          },
          rank: {
            title: "Rank",
            errors: {
              missing: "Rank is required",
            },
          },
        },
        buttons: {
          create: {
            label: "Create",
          },
        },
      },
      toasts: {
        create: {
          error: "Failed to create binding",
          success: (id: string) => `Binding ${id} created`,
        },
      },
    },
  },
};
