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
      title: "lotus",
      description: "lotus",
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
      title: "Media • lotus",
      description: "lotus",
    },
    media: {
      title: (id: string) => `Media ${id} • lotus`,
      description: "lotus",
    },
    mediaNotFound: {
      text: "Media not found",
    },
    newMedia: {
      title: "New Media • lotus",
      description: "lotus",
    },
    playlistList: {
      title: "Playlists • lotus",
      description: "lotus",
    },
    playlist: {
      title: (id: string) => `Playlist ${id} • lotus`,
      description: "lotus",
    },
    playlistNotFound: {
      text: "Playlist not found",
    },
    newPlaylist: {
      title: "New Playlist • lotus",
      description: "lotus",
    },
    bindingList: {
      title: "Bindings • lotus",
      description: "lotus",
    },
    binding: {
      title: (id: string) => `Binding ${id} • lotus`,
      description: "lotus",
    },
    bindingNotFound: {
      text: "Binding not found",
    },
    newBinding: {
      title: "New Binding • lotus",
      description: "lotus",
    },
    notFound: {
      title: "Not Found • lotus",
      description: "lotus",
      text: "Page not found",
    },
    error: {
      title: "Error • lotus",
      description: "lotus",
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
