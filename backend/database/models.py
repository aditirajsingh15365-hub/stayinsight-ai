from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import DateTime

from datetime import datetime

from database.connection import Base


class Review(Base):

    __tablename__ = "reviews"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    review_text = Column(
        String,
        nullable=False
    )

    sentiment = Column(String)

    theme = Column(String)

    priority = Column(String)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )