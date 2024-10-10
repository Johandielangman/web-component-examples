import os
import re
import webbrowser
from typing import (
    List
)


def get_numbered_folders() -> List[str]:
    root_dir: str = os.path.dirname(__file__)
    all_entries: List[str] = os.listdir(root_dir)
    numbered_folders: List[str] = [
        entry
        for entry in all_entries
        if (
            re.match(r'^\d', entry) and
            os.path.isdir(os.path.join(root_dir, entry))
        )
    ]
    return numbered_folders


if __name__ == "__main__":
    print("Opening examples...")
    numbered_folders: List[str] = get_numbered_folders()

    for i, folder in enumerate(numbered_folders, start=1):
        print(f"[{i}] Opening {folder}/index.html...")
        webbrowser.open(f"file://{os.path.abspath(folder)}/index.html")
