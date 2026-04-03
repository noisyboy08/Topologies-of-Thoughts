import logging

from .job_runner import run_worker_forever


def main() -> None:
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s %(levelname)s [%(name)s] %(message)s",
    )
    run_worker_forever(poll_seconds=1.0)


if __name__ == "__main__":
    main()
